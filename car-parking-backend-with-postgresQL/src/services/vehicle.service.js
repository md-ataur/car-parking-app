const ApiError = require('../utils/ApiError');
const { Vehicle } = require('../models');

const addVehicle = async (data) => {
  /* try {
    return await Vehicle.create({
      licenseNumber: data.license_number
    });
  } catch (error) {
    throw new ApiError(6001, error.message);
  } */

  return await Vehicle.create({
    licenseNumber: data.license_number,
    firstName: data.name,
    phone: data.phone,
    carType: data.car_type,
    charge: data.charge,
    entryDate: data.entry_date,
    exitDate: data.exit_date,
    entryTime: data.entry_time,
    exitTime: data.exit_time,
    status: data.status,
    address: data.address
  });

};

module.exports = {
  addVehicle
};
