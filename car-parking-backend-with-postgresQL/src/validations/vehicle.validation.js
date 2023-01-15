const ApiError = require('../utils/ApiError');
const { error } = require('../utils/ApiResponse');

const addVehicle = async (req, res, next) => {
  try {
    if (!req.body.hasOwnProperty('license_number')) res.send(error(6001, 'License number must have in the field'));
    if (!req.body.hasOwnProperty('name')) res.send(error(6001, 'Name must have in the field'));
    if (!req.body.hasOwnProperty('phone')) res.send(error(6001, 'Phone must have in the field'));
    next();
  } catch (err) {
    return next(new ApiError(6001, err.message));
  }
}

module.exports = {
  addVehicle
}