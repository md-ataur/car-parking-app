const { error } = require("../utils/ApiResponse");

const addVehicle = async (req, res, next) => {
  try {
    if (!req.body.licenseNumber || req.body.licenseNumber.length === 0) {
      return res.send(error("License number must have in the field"));
    }
    if (!req.body.vehicleType || req.body.vehicleType === 0) {
      return res.send(error("Vehicle type must have in the field"));
    }
    if (!req.body.firstName || req.body.firstName.length === 0) {
      return res.send(error("Name must have in the field"));
    }
    if (!req.body.phone || req.body.length === 0) {
      return res.send(error("Phone must have in the field"));
    }
    if (!req.body.charge || req.body.charge === 0) {
      return res.send(error("Charge must have in the field"));
    }
    if (!req.body.entryDate || req.body.entryDate === 0) {
      return res.send(error("Entry Date must have in the field"));
    }
    if (!req.body.exitDate || req.body.exitDate === 0) {
      return res.send(error("Exit Date must have in the field"));
    }
    if (!req.body.entryTime || req.body.entryTime === 0) {
      return res.send(error("Entry time must have in the field"));
    }
    if (!req.body.exitTime || req.body.exitTime === 0) {
      return res.send(error("Exit time must have in the field"));
    }
    if (!req.body.status || req.body.status === 0) {
      return res.send(error("Status must have in the field"));
    }
    next();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  addVehicle,
};
