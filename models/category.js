import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name for the category must be provided"],
  },
  overview: {
    type: String,
    required: [true, "Please provide category overview"],
  },
  img: {
    type: String,
    required: [true, "Image URL for the category must be provided"],
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
