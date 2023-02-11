const { Vehicle } = require("../models");

/**
 * Get all data
 * @returns
 */
const getVehicles = async () => {
  const vehicles = await Vehicle.find({});
  if (vehicles.length > 0) {
    return vehicles;
  } else {
    throw new Error("Vehicles Not found!", { cause: 6000 });
  }
};

/**
 * Add data
 * @param {data}
 * @returns
 */
const addVehicle = async (data) => {
  const licenseNumberExists = await Vehicle.findOne({
    licenseNumber: data.license_number,
  });

  if (licenseNumberExists) throw new Error("License number already exists", { cause: 6001 });

  return await Vehicle.create({
    licenseNumber: data.license_number,
    firstName: data.name,
    phone: data.phone,
    vehicleType: data.vehicle_type,
    charge: data.charge,
    entryDate: data.entry_date,
    exitDate: data.exit_date,
    entryTime: data.entry_time,
    exitTime: data.exit_time,
    status: data.status,
    address: data.address,
  });
};

/**
 * Get data by id
 * @param {id}
 * @returns
 */
const getVehicleById = async (id) => Vehicle.findById(id);

/**
 * Update date
 * @param {id}
 * @param {data}
 * @returns
 */
const updateVehicle = async (id, data) => {
  const vehicle = await getVehicleById(id);
  if (!vehicle) {
    throw new Error("Nothing found to Update", { cause: 6003 });
  }

  const response = await Vehicle.findByIdAndUpdate(
    { _id: id },
    {
      licenseNumber: data.license_number,
      firstName: data.name,
      phone: data.phone,
      vehicleType: data.vehicle_type,
      charge: data.charge,
      entryDate: data.entry_date,
      exitDate: data.exit_date,
      entryTime: data.entry_time,
      exitTime: data.exit_time,
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
    throw new Error("Nothing found to Delete", { cause: 6004 });
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
