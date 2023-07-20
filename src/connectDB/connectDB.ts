import mongoose from "mongoose";
import "dotenv/config";

const db = process.env.MONGO_URL;

const connect = async () => {
  try {
    const conn = await mongoose.connect(db);
    console.log("Connect database success");
  } catch (err) {
    console.log("Connect database failed");
  }
};
export default connect;
