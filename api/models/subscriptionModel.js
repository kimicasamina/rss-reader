import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  rss_url: {
    type: String,
  },
  link: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  image_url: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  category: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  blogs: { type: Array },
});

const subscriptionModel = mongoose.model("subscriptions", subscriptionSchema);
export default subscriptionModel;
