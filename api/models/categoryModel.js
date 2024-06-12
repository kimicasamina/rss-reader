import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  subscription: [
    {
      type: mongoose.Types.ObjectId,
      ref: "subscription",
    },
  ],
  //   url: "https://news.ycombinator.com/rss",
  //   title: "Hacker News",
  //   link: "https://news.ycombinator.com/",
  //   author: "",
  //   description: "Links for the intellectually curious, ranked by readers.",
  //   image: "",
});

const categoryModel = mongoose.model("category", categorySchema);
export default categoryModel;
