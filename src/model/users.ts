import mongoose from "mongoose";
import { User } from "types/RootTypes";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      default: "Anonymous",
    },
    lastname: {
      type: String,
      default: "User",
    },
    displayname: {
      type: String,
      default: "Anonymous",
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
    profile_id: { type: String, unique: true },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      default: "+84 321-321-321",
    },
    address: {
      type: String,
      default: "Hidden info",
    },
    shippingaddress: {
      type: String,
      default: "Hidden info",
    },
    image: {
      type: String,
      default: "",
    },
    role: {
      type: Number,
      required: true,
      default: 1,
    },
    root: {
      type: Boolean,
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
