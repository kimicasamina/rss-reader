import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { createError } from "../utils/createError.js";
import subscriptionModel from "../models/subscriptionModel.js";
import Parser from "rss-parser";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.find({}).select("-password");
    return res.status(200).json({ status: "ok", users });
  } catch (err) {
    console.log(err);
    // throw createError(500, "Failed to retrieve users data");
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
};

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  let existingUser;

  // check if user already exists
  try {
    existingUser = await userModel.findOne({ email });
  } catch (error) {
    // return createError(err.status, err.message);
    return res.status(err.statusCode).json(error.message);
  }
  if (existingUser) {
    // return createError(401, "User already exist! Login Instead");
    return res
      .status(401)
      .json({ status: "error", message: "User already exist! Login instead." });
  }

  // create new user
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await userModel.create({
    username,
    email,
    password: hashPassword,
  });

  return res
    .status(201)
    .json({ message: "User registered successfully", status: "ok" });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("email, password", password);
  try {
    let user = await userModel.findOne({ email });

    // check if user exist
    if (!user) {
      // return createError(401, "User already exist! Login Instead");
      return res.status(401).json({
        status: "error",
        message: "User does not exist.",
      });
    }

    // check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log("password do not match");
      // return createError(401, "Incorrect password");
      return res
        .status(401)
        .json({ status: "error", message: "Password do not match." });
    }

    // create token
    const token = jwt.sign(
      { user: { id: user._id, username: user.username } },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      expiresIn: "15m",
    });

    const userDetails = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };

    return res.status(201).json({
      status: "ok",
      user: userDetails,
      message: "You are successfully logged in.",
    });
  } catch (err) {
    // console.log("err", err);
    console.log("err", err);
    // return createError(err.status, err.message);
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
};

export const logout = async (req, res, next) => {
  let token = req.cookies.access_token;
  console.log("DELETE TOKEN", token);
  try {
    res.clearCookie("access_token");
    res.json({ status: "ok", message: "You are logged out." });
  } catch (err) {
    console.log(err);
    // return next(createError(500, "Logout failed"));
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
};

export const getUser = async (req, res, next) => {
  let user = req.user;
  console.log("REQ USER_ID", user);
  try {
    const userInfo = await userModel
      .findById(user.id)
      .select("-password -subscription -category");
    return res.status(200).json({ user: userInfo });
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
};

export const updateCategory = async (req, res, next) => {
  let userId = req.params.id;
  const category = req.body;

  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({ status: "ok", user: userInfo });
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
};

export const getAllSubs = async (req, res, next) => {
  let userId = req.params.id;
  // console.log("GET ALL SUBS:", userId);

  try {
    const subs = await subscriptionModel.find({ user: userId });
    // console.log("ALL SUBS:", subs);
    return res.status(200).json({ status: "ok", subs });
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
};

export const addSub = async (req, res, next) => {
  const id = req.params.id;
  const { rss_url, category } = req.body;
  console.log("Add subscriptions...", rss_url, category, id);
  let parser = new Parser();
  let feed;

  try {
    const existingSub = await subscriptionModel.findOne({
      feed: { feedUrl: rss_url },
    });

    if (existingSub) {
      console.log("Feed already exist.");
      return next(createError(404, "Feed already exist."));
    }

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    feed = await parser.parseURL(rss_url);
    console.log(feed);
    // feed = await parser.parseURL(rss_url);
    // console.log(feed.title);
  } catch (err) {
    console.log("ERR:", err);
    return next(createError(err.statusCode, err.message));
  }

  const user = await userModel.findById(id);

  const newSub = new subscriptionModel({
    feed: feed,
    category: category,
    user: user._id,
  });

  await newSub.save();

  return res
    .status(201)
    .json({ message: "New subscription added", newSub, feed: feed });
};

export const getAllLatestSubs = async (req, res, next) => {
  const userId = req.params.id;
  console.log("USER ID:", userId);
  let parser = new Parser();
  let latestSubs = [];

  const parseRSS = async (url) => {
    let feed = await parser.parseURL(url);
    console.log("FEED:", feed);
    // let latestSub;
    return feed;
  };

  try {
    const existingSub = await subscriptionModel.find({ user: userId });
    console.log("EXISTING SUBS:", existingSub);

    const fetchFeed = () => {
      existingSub.forEach((sub) => {
        let url = sub.feed.feedUrl;
        console.log("URL:", sub.feed.feedUrl);
        let feed = parseRSS(url);
        console.log("FEED:", feed);

        if (feed) {
          latestSubs.push({
            ...sub,
            feed: feed,
          });
        }
      });
    };

    const updateFeed = () => {
      latestSubs.forEach((sub) => {
        console.log("UPDATE MODEL");
        const updatedSub = subscriptionModel.findOneAndUpdate({
          _id: sub._id,
        });
      });
    };
    fetchFeed();
    updateFeed();

    const allUpdates = await subscriptionModel.find({});
    return res
      .status(201)
      .json({ status: "ok", message: "Success", allUpdates });
  } catch (err) {
    console.log("ERR:", err);
  }
};
