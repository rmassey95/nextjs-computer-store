import mongoose, { Schema } from "mongoose";

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title for the review is required"],
  },
  comment: {
    type: String,
  },
  user: {
    type: String,
    required: [true, "Username for the review is required"],
  },
  datePosted: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  rating: {
    type: Number,
    required: [true, "Please specify a raiting for the product"],
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
