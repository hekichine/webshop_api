import mongoose from "mongoose";
import { Product } from "types/RootTypes";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    price: { type: Number, default: 0 },
    cost: { type: Number, default: 0 },
    desc: { type: String },
    images: [
      {
        type: String,
      },
    ],
    totalSell: { type: Number, default: 0 },
    vendor: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    brand: { type: mongoose.Types.ObjectId, ref: "Brand", required: true },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    featured: { type: Boolean, default: true },
    variants: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
    countInStock: { type: Number, default: 0 },
    review: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
productSchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model<Product>("Product", productSchema);
