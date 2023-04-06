const { Vehicle } = require("../models");

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
const getVehicles = async () => {
  const vehicles = await Vehicle.findAll({});
  if (vehicles.length > 0) {
    return vehicles;
  }
  throw new Error("Vehicles Not found!");
};

/**
 * Add data
 * @param {data}
 * @returns
 */
const addVehicle = async (data: IVehicle): Promise<IVehicle> => {
  const licenseNumberExists = await Vehicle.findOne({
    where: {
      licenseNumber: data.licenseNumber,
    },
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
const getVehicleById = async (id: string) => {
  /* return await Vehicle.findOne({
    where: {
      id
    }
  }); */

  const vehicle = await Vehicle.findByPk(id);
  if (vehicle !== null) {
    return vehicle;
  }
  throw new Error("Vehicle Not found");
};

/**
 * Update data
 * @param {id}
 * @param {data}
 * @returns
 */
const updateVehicle = async (id: string, data: IVehicle) => {
  const response = await Vehicle.update(
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
    {
      where: {
        id,
      },
    }
  );

  if (response[0] === 0) {
    throw new Error("Nothing found to Update");
  }

  return response;
};

/**
 * Delete data
 * @param {id}
 * @returns
 */
const deleteVehicle = async (id: string) => {
  const response = await Vehicle.destroy({
    where: {
      id,
    },
  });

  if (response === 0) {
    throw new Error("Nothing found to Delete");
  }
  return response;
};

module.exports = {
  getVehicles,
  addVehicle,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
