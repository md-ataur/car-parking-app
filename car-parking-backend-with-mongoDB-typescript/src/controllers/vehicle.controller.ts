/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Request, type Response } from "express";
import vehicleService from "../services";
import { success, error } from "../utils/ApiResponse";

// Get all data
/* const getVehicles = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.getVehiclesRequest(req.body);
    res.status(200).send(success(data, "Vehicles found successfully"));
  } catch (error: any) {
    res.send(error(error.message, error.cause));
  }
}; */

// Add data
const addVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.addVehicle(req.body);
    res.status(200).send(success(data, "Vehicle added successfully"));
  } catch (err: any) {
    res.send(error(err.message, 6001));
  }
};

// Get data by id
/* const getVehicleById = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.getVehicleById(req.params.id);
    if (data !== null) {
      res.status(200).send(success(data, "Vehicle found successfully"));
    } else {
      res.send(error("Not found", 6002));
    }
  } catch (err) {
    res.send(error(err.message, err.cause));
  }
}; */

// Update data
/* const updateVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.updateVehicle(req.params.id, req.body);
    res.status(200).send(success(data, "Vehicle updated successfully"));
  } catch (err) {
    res.send(error(err.message, err.cause));
  }
}; */

// Delete data
/* const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleService.deleteVehicle(req.params.id);
    res.status(httpStatus.OK).send(success(data, "Vehicle deleted successfully"));
  } catch (err) {
    res.send(error(err.message, err.cause));
  }
}; */

export = {
  // getVehicles,
  addVehicle,
  // getVehicleById,
  // updateVehicle,
  // deleteVehicle,
};
