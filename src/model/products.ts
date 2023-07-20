import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String },
    price: { type: Number },
    cost: { type: Number },
    desc: { type: String },
    images: [
      {
        image: {
          type: String,
        },
      },
    ],
    totalSell: { type: Number },
    vendor: { type: String },
    brand: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    featured: { type: Boolean },
    variants: [{ type: String }],
    tags: [{ type: String }],
    countInStock: { type: Number },
    review: { type: Number },
    rating: { type: Number },
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

export default mongoose.model("Product", productSchema);
