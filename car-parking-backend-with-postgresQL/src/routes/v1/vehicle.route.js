const express = require('express');
const router = express.Router();
const { vehicleValidation } = require('../../validations');
const { vehicleController } = require('../../controllers');

router.post('/add', vehicleValidation.addVehicle, vehicleController.addVehicle);

module.exports = router;