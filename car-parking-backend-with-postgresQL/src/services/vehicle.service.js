const { Vehicle } = require("../models");

/**
 * Get all data
 * @returns
 */
const getVehicles = async () => {
  const vehicles = await Vehicle.findAll({});
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
    where: {
      licenseNumber: data.license_number,
    },
  });

  if (licenseNumberExists) throw new Error("License number already exists", { cause: 6001 });

  const response = await Vehicle.create({
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
  return response;
};

/**
 * Get data by id
 * @param {id}
 * @returns
 */
const getVehicleById = async (id) => {
  /* return await Vehicle.findOne({
    where: {
      id
    }
  }); */

  const vehicle = await Vehicle.findByPk(id);
  if (vehicle !== null) {
    return vehicle;
  }
  throw new Error("Vehicle Not found", { cause: 6002 });
};

/**
 * Update data
 * @param {id}
 * @param {data}
 * @returns
 */
const updateVehicle = async (id, data) => {
  const response = await Vehicle.update(
    {
      icenseNumber: data.license_number,
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
    {
      where: {
        id,
      },
    }
  );

  if (response[0] === 0) {
    throw new Error("Nothing found to Update", { cause: 6003 });
  }
  return response;
};

/**
 * Delete data
 * @param {id}
 * @returns
 */
const deleteVehicle = async (id) => {
  const response = await Vehicle.destroy({
    where: {
      id,
    },
  });

  if (response === 0) {
    throw new Error("Nothing found to Delete", { cause: 6004 });
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
