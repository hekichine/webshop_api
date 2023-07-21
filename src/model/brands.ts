import mongoose from "mongoose";
import { Brand } from "types/RootTypes";

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  image: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
  },
});
brandSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
brandSchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model<Brand>("Brand", brandSchema);
