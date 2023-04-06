const { Vehicle } = require("../models");

/**
 * Get all data
 * @returns
 */
const getVehicles = async () => {
  const vehicles = await Vehicle.find({});
  if (vehicles.length > 0) {
    return vehicles;
  }
  throw new Error("Vehicles Not found!", { cause: 6000 });
};

/**
 * Add data
 * @param {data}
 * @returns
 */
const addVehicle = async (data) => {
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
const getVehicleById = async (id) => await Vehicle.findById(id);

/**
 * Update date
 * @param {id}
 * @param {data}
 * @returns
 */
const updateVehicle = async (id, data) => {
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
const deleteVehicle = async (id) => {
  const vehicle = await getVehicleById(id);
  if (!vehicle) {
    throw new Error("Nothing found to Delete");
  }
  await vehicle.remove();
  return vehicle;
};

module.exports = {
  getVehicles,
  addVehicle,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
