const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    licenseNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleType: {
      type: String,
      enum: ["car", "microbus", "truck"],
      required: true,
    },
    charge: {
      type: Number,
      required: true,
      trim: true,
    },
    entryDate: {
      type: Date,
      required: true,
      trim: true,
    },
    exitDate: {
      type: Date,
      required: true,
      trim: true,
    },
    entryTime: {
      type: Date,
      required: true,
      trim: true,
    },
    exitTime: {
      type: Date,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("vehicle", vehicleSchema);
