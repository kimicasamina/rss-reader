import subscriptionModel from "../models/subscriptionModel.js";
import { createError } from "../utils/createError.js";
import Parser from "rss-parser";

export const getAllSub = async (req, res, next) => {
  console.log("Get all subscriptions...");
  try {
    const subs = await subscriptionModel.find({});
    res.status(200).json(subs);
  } catch (err) {
    console.log(err);
    return next(createError(err.status, err.message));
  }
};

export const addSub = async (req, res, next) => {
  const { rss_url, category } = req.body;
  console.log("Add subscriptions...", rss_url, category);
  let parser = new Parser();
  let feed;

  try {
    feed = await parser.parseURL(rss_url);
    console.log(feed.title);
    // feed = await parser.parseURL(rss_url);
    // console.log(feed.title);
  } catch (err) {
    console.log("ERR:", err);
    return next(createError(404, "Could not fetch data."));
  }

  const existingSub = await subscriptionModel.findOne({
    title: feed.title,
  });

  if (existingSub) {
    console.log("Feed already exist.");
    return next(createError(404, "Feed already exist."));
  }
  const newSub = await subscriptionModel.create({
    title: feed.title,
    rss_url: rss_url,
    link: feed.link,
    author: feed.title,
    description: feed.description,
    image_url: feed.image.url,
    category: category,
  });

  return res.status(201).json({ message: "New subscription added", newSub });
};
