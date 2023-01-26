const { error } = require('../utils/ApiResponse');

const addVehicle = async (req, res, next) => {
  try {
    if (!req.body.license_number || req.body.license_number.length === 0) {
      return res.send(error('License number must have in the field', 6001));
    }
    if (!req.body.vehicle_type || req.body.vehicle_type === 0) {
      return res.send(error('Vehicle type must have in the field', 6001));
    }
    if (!req.body.name || req.body.name.length === 0) {
      return res.send(error('Name must have in the field', 6001));
    }
    if (!req.body.phone || req.body.length === 0) {
      return res.send(error('Phone must have in the field', 6001));
    }
    if (!req.body.charge || req.body.charge === 0) {
      return res.send(error('Charge must have in the field', 6001));
    }
    if (!req.body.entry_date || req.body.entry_date === 0) {
      return res.send(error('Entry Date must have in the field', 6001));
    }
    if (!req.body.exit_date || req.body.exit_date === 0) {
      return res.send(error('Exit Date must have in the field', 6001));
    }
    if (!req.body.entry_time || req.body.entry_time === 0) {
      return res.send(error('Entry time must have in the field', 6001));
    }
    if (!req.body.exit_time || req.body.exit_time === 0) {
      return res.send(error('Exit time must have in the field', 6001));
    }
    if (!req.body.status || req.body.status === 0) {
      return res.send(error('Status must have in the field', 6001));
    }
    next();
  } catch (err) {
    return next(new Error(err.message));
  }
};

module.exports = {
  addVehicle
};
