import { type Request, type Response } from "express";
import { success, error } from "../utils/ApiResponse";
const httpStatus = require("http-status");
const { vehicleService } = require("../services");

// Get all data
const getVehicles = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.getVehicles();
    res.status(httpStatus.OK).send(success(data, "Vehicles found successfully"));
  } catch (err: any) {
    res.send(error(err.message));
  }
};

// Add data
const addVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.addVehicle(req.body);
    res.status(httpStatus.CREATED).send(success(data, "Vehicle successfully added"));
  } catch (err: any) {
    res.send(error(err.message));
  }
};

// Get data by id
const getVehicleById = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.getVehicleById(req.params.id);
    res.status(httpStatus.OK).send(success(data, "Vehicle found successfully"));
  } catch (err: any) {
    res.send(error(err.message));
  }
};

// Update data
const updateVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.updateVehicle(req.params.id, req.body);
    res.status(httpStatus.OK).send(success(data, "Vehicle updated successfully"));
  } catch (err: any) {
    res.send(error(err.message));
  }
};

// Delete data
const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.deleteVehicle(req.params.id);
    res.status(httpStatus.OK).send(success(data, "Vehicle deleted successfully"));
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
