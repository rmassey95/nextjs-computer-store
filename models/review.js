import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title for the review is required"],
  },
  comment: {
    type: String,
    required: [true, "Please provide a comment"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
