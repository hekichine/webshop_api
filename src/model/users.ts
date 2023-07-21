import mongoose from "mongoose";
import { User } from "types/RootTypes";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    displayname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profile_id: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    shippingaddress: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: Number,
      required: true,
      default: 1,
    },
    root: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
userSchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model<User>("User", userSchema);
