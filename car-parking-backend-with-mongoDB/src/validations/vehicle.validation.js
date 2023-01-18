const ApiError = require('../utils/ApiError');
const { error } = require('../utils/ApiResponse');

const addVehicle = async (req, res, next) => {
  try {
    if (!req.body.license_number || req.body.license_number.length === 0) {
      return res.send(error(6001, 'License number must have in the field'));
    }
    if (!req.body.vehicle_type || req.body.vehicle_type === 0) {
      return res.send(error(6001, 'Vehicle type must have in the field'));
    }
    if (!req.body.name || req.body.name.length === 0) {
      return res.send(error(6001, 'Name must have in the field'));
    }
    if (!req.body.phone || req.body.length === 0) {
      return res.send(error(6001, 'Phone must have in the field'));
    }
    if (!req.body.charge || req.body.charge === 0) {
      return res.send(error(6001, 'Charge must have in the field'));
    }
    if (!req.body.entry_date || req.body.entry_date === 0) {
      return res.send(error(6001, 'Entry Date must have in the field'));
    }
    if (!req.body.exit_date || req.body.exit_date === 0) {
      return res.send(error(6001, 'Exit Date must have in the field'));
    }
    if (!req.body.entry_time || req.body.entry_time === 0) {
      return res.send(error(6001, 'Entry time must have in the field'));
    }
    if (!req.body.exit_time || req.body.exit_time === 0) {
      return res.send(error(6001, 'Exit time must have in the field'));
    }
    if (!req.body.status || req.body.status === 0) {
      return res.send(error(6001, 'Status must have in the field'));
    }
    next();
  } catch (err) {
    return next(new ApiError(6001, err.message));
  }
};

module.exports = {
  addVehicle
};
