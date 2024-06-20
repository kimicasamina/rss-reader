import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  feed: {
    type: Object,
    default: {},
  },
  category: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const subscriptionModel = mongoose.model("subscriptions", subscriptionSchema);
export default subscriptionModel;
