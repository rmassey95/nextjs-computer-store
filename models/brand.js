import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name for the brand must be provided"],
  },
  overview: {
    type: String,
    required: [true, "Please provide brand overview"],
  },
  img: {
    type: String,
    required: [true, "Image URL for the brand must be provided"],
  },
});

export default mongoose.models.Brand || mongoose.model("Brand", BrandSchema);
