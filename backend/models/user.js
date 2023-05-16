import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    contactNo: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
