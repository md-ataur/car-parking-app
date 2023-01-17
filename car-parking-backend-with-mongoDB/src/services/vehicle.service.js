const ApiError = require('../utils/ApiError');
const { Vehicle } = require('../models');

/**
 * Get all data
 * @returns
 */
const getVehicles = async () => {
  const vehicles = await Vehicle.findAll({});
  if (vehicles.length > 0) {
    return vehicles;
  } else {
    throw new ApiError(6000, 'Not found!');
  }
};

/**
 * Add data
 * @param {data}
 * @returns
 */
const addVehicle = async (data) => {
  const licenseNumberExists = await Vehicle.findOne({
    where: {
      licenseNumber: data.license_number
    }
  });

  if (licenseNumberExists)
    throw new ApiError(6001, 'License number already exists');

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
    address: data.address
  });
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
  } else {
    throw new ApiError(6002, 'Not found!');
  }
};

/**
 * Update date
 * @param {id}
 * @param {data}
 * @returns
 */
const updateVehicle = async (id, data) => {
  const response = await Vehicle.update(
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
      address: data.address
    },
    {
      where: {
        id
      }
    }
  );

  if (response[0] === 0) {
    throw new ApiError(6002, 'Nothing found to Update');
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
      id
    }
  });

  if (response === 0) {
    throw new ApiError(6004, 'Nothing found to Delete');
  }

  return response;
};

module.exports = {
  getVehicles,
  addVehicle,
  getVehicleById,
  updateVehicle,
  deleteVehicle
};
