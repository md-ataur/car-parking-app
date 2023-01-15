const httpStatus = require('http-status');
const { vehicleService } = require('../services');
const { success, error } = require('../utils/ApiResponse');

const addVehicle = async (req, res) => {
  try {
    const data = await vehicleService.addVehicle(req.body);
    res.status(httpStatus.OK).send(success(data, 'Vehicle added successfully'));
  } catch (err) {
    res.send(error(6001, err.message));
  }
};

module.exports = {
  addVehicle
}