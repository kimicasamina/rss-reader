import categoryModel from "../models/categoryModel.js";
import subscriptionModel from "../models/subscriptionModel.js";
import createError from "../utils/createError.js";

export const getAllSub = async (req, res, next) => {
  console.log("Get all subscriptions...");
  try {
    const subs = await subscriptionModel.find({});
    res.status(200).json(subs);
  } catch (error) {
    console.log(error);
    createError("501");
  }
};

export const addSub = async (req, res, next) => {
  const { title, rss_url, link, author, description, image_url, category } =
    req.body;
  console.log("Add subscriptions...");
  let existingSub;
  try {
    existingSub = await subscriptionModel.findOne({ title: title });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Failed to create new subscription."));
  }

  if (existingSub) {
    return next(createError(400, "Subscription already exist."));
  }

  const newSub = await subscriptionModel.create({
    title,
    rss_url,
    link,
    author,
    description,
    image_url,
    category,
  });

  return res.status(201).json({ message: "New subscription added", newSub });
};
