import Vehicle from "../models";
// import { type Types } from "mongoose";

interface IVehicle {
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

/**
 * Get all data
 * @returns
 */
const getVehicles = async () /* : Promise<IVehicle> */ => {
  const vehicles = await Vehicle.find({});
  if (vehicles.length > 0) {
    return vehicles;
  } else {
    throw new Error("Vehicles Not found!");
  }
};

/**
 * Add data
 * @param {data}
 * @returns
 */
const addVehicle = async (data: IVehicle): Promise<IVehicle> => {
  const licenseNumberExists = await Vehicle.findOne({
    licenseNumber: data.licenseNumber,
  });

  if (licenseNumberExists) throw new Error("License number already exists");

  const response = await Vehicle.create({
    licenseNumber: data.licenseNumber,
    firstName: data.firstName,
    phone: data.phone,
    vehicleType: data.vehicleType,
    charge: data.charge,
    entryDate: data.entryDate,
    exitDate: data.exitDate,
    entryTime: data.entryTime,
    exitTime: data.exitTime,
    status: data.status,
    address: data.address,
  });
  return response;
};

/**
 * Get data by id
 * @param {id}
 * @returns
 */
const getVehicleById = async (id: string) => await Vehicle.findById(id);

/**
 * Update date
 * @param {id}
 * @param {data}
 * @returns
 */
const updateVehicle = async (id: string, data: IVehicle) => {
  const vehicle = await getVehicleById(id);
  if (!vehicle) {
    throw new Error("Nothing found to Update");
  }

  const response = await Vehicle.findByIdAndUpdate(
    { _id: id },
    {
      licenseNumber: data.licenseNumber,
      firstName: data.firstName,
      phone: data.phone,
      vehicleType: data.vehicleType,
      charge: data.charge,
      entryDate: data.entryDate,
      exitDate: data.exitDate,
      entryTime: data.entryTime,
      exitTime: data.exitTime,
      status: data.status,
      address: data.address,
    },
    { new: true }
  );
  return response;
};

/**
 * Delete data
 * @param {id}
 * @returns
 */
const deleteVehicle = async (id: string) => {
  const vehicle = await getVehicleById(id);
  if (!vehicle) {
    throw new Error("Nothing found to Delete");
  }
  await vehicle.remove();
  return vehicle;
};

export = {
  getVehicles,
  addVehicle,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
