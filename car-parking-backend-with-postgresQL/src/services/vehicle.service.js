const ApiError = require('../utils/ApiError');
const { Vehicle } = require('../models');


/**
 * Get data
 * @returns
 */
const getVehicles = async () => {
  return await Vehicle.findAll({});
}


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

  if (licenseNumberExists) throw new ApiError(6001, 'License number already exists');

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
  getVehicles,
  addVehicle
};
