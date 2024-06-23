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
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const subscriptionModel = mongoose.model("subscriptions", subscriptionSchema);
export default subscriptionModel;
