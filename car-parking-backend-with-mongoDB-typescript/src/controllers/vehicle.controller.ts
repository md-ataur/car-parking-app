import { type Request, type Response } from "express";
import vehicleService from "../services";
import { type Document, type Types } from "mongoose";
import { success, error } from "../utils/ApiResponse";

// Get all data
const getVehicles = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.getVehicles();
    res.status(200).send(success(data, "Vehicles found successfully"));
  } catch (error: any) {
    res.send(error(error.message));
  }
};

// Add data
const addVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.addVehicle(req.body);
    res.status(200).send(success(data, "Vehicle added successfully"));
  } catch (err: any) {
    res.send(error(err.message));
  }
};

// Get data by id
const getVehicleById = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.getVehicleById(req.params.id);
    if (data !== null) {
      res.status(200).send(success(data, "Vehicle found successfully"));
    } else {
      res.send(error("Not found"));
    }
  } catch (err: any) {
    res.send(error(err.message));
  }
};

// Update data
const updateVehicle = async (req: Request, res: Response) => {
  try {
    const data:
      | (Document<any> &
          any & {
            _id: Types.ObjectId;
          })
      | null = await vehicleService.updateVehicle(req.params.id, req.body);
    res.status(200).send(success(data, "Vehicle updated successfully"));
  } catch (err: any) {
    res.send(error(err.message));
  }
};

// Delete data
const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.deleteVehicle(req.params.id);
    res.status(200).send(success(data, "Vehicle deleted successfully"));
  } catch (err: any) {
    res.send(error(err.message));
  }
};

export = {
  getVehicles,
  addVehicle,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
