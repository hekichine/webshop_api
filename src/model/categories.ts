import mongoose from "mongoose";
import { Category } from "types/RootTypes";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    slug: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);
categorySchema.virtual("id").get(function () {
  return this._id.toHexString();
});
categorySchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model<Category>("Category", categorySchema);
