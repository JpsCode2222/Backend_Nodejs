import mongoose from "mongoose";

const patient = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // diagnoseWith = medical problam
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      Request: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.OjbectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", medicalRecordSchema);
