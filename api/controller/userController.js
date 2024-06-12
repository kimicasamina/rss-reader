import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { createError } from "../utils/createError.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.find({});
    return res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Failed to retrieve users data"));
  }
};

export const signup = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
  let existingUser;

  // check if user already exists
  try {
    existingUser = await userModel.findOne({ email });
  } catch (error) {
    return next(createError(500, "Registration failed"));
  }
  if (existingUser) {
    return next(createError(401, "User already exist! Login Instead"));
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
    .json({ message: "User registered successfully", success: true });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    // check if user exist
    if (!user) {
      return next(createError(401, "User already exist! Login Instead"));
    }

    // check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return next(createError(401, "Incorrect password"));
    }

    // create token
    const token = jwt.sign(
      { user: { id: user._id, username: user.username } },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    const userInfo = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };

    res.cookie("access_token", token, {
      httpOnly: true,
      expiresIn: "15m",
    });
    res.status(201).json({ user: userInfo, success: true });
  } catch (err) {
    console.log(err);
    return next(createError(401, "Login Failed"));
  }
};

export const logout = async (req, res, next) => {
  let token = req.cookies.access_token;
  console.log("DELETE TOKEN", token);
  try {
    res.clearCookie("access_token");
    res.json({ success: true, message: "You are logged out." });
  } catch (err) {
    console.log(err);
    return next(createError(500, "Logout failed"));
  }
};

export const getUser = async (req, res, next) => {
  let user = req.user;
  console.log("REQ USER_ID", user);
  try {
    const userInfo = await userModel.findById(user.id).select("-password");
    return res.status(200).json({ success: true, user: userInfo });
  } catch (err) {
    console.log(err);
    return next(createError(401, "User not found"));
  }
};

export const updateCategory = async (req, res, next) => {
  let userId = req.params.id;

  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({ success: true, user: userInfo });
  } catch (err) {
    console.log(err);
    return next(createError(401, "User not found"));
  }
};
