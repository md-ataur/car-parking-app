const httpStatus = require('http-status');
const { vehicleService } = require('../services');
const { success, error } = require('../utils/ApiResponse');

// Get data
const getVehicles = async (req, res) => {
  try {
    const data = await vehicleService.getVehicles(req.body);
    res.status(httpStatus.OK).send(success(data, 'Vehicles found successfully'));
  } catch (err) {
    res.send(error(6000, err.message));
  }
}

// Add data
const addVehicle = async (req, res) => {
  try {
    const data = await vehicleService.addVehicle(req.body);
    res.status(httpStatus.CREATED).send(success(data, 'Vehicle added successfully'));
  } catch (err) {
    res.send(error(6001, err.message));
  }
};

module.exports = {
  getVehicles,
  addVehicle
}