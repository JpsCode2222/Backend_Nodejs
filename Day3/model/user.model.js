import mongoose from "mongoose";

// userSchema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

// userModel
export const User = mongoose.model("User", userSchema);
