import mongoose from "mongoose";

// order structure (mini model)
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    requried: true,
  },
});

// orderSchema
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: String,
      requried: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      requried: true,
    },
    status: {
      type: String,
      // enum = choicess
      enum: ["PENDING", "CANCLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

// Order model
export const Order = mongoose.model("Order", orderSchema);
