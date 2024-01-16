import mongoose from "mongoose";

// categorySchema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Category model
export const Category = mongoose.model("Category", categorySchema);
