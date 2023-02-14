import { Schema, model } from "mongoose";

interface Vehicle {
  licenseNumber: string;
  firstName: string;
  phone: string;
  vehicleType: string;
  charge: number;
  entryDate: Date;
  exitDate: Date;
  entryTime: Date;
  exitTime: Date;
  status: string;
  address?: string;
}

const vehicleSchema = new Schema<Vehicle>(
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
      trim: true,
    },
  },
  { timestamps: true }
);

export = model<Vehicle>("tsvehicle", vehicleSchema);
