import mongoose, { Schema } from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name for the product must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price for the product"],
    min: [0, "Price must not be below 0"],
  },
  overview: {
    type: String,
    required: [true, "Please provide product overview"],
  },
  specs: [
    {
      name: { type: String },
      content: { type: String },
    },
  ],
  additionalInfo: [
    {
      type: String,
    },
  ],
  quantity: {
    type: Number,
    min: [0, "Quantity must be greater than or equal to zero"],
  },
  img: {
    type: String,
    required: [true, "Image URL of the product must be included"],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
});

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
