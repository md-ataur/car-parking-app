const express = require('express');
const router = express.Router();

router.post('/add', vehicleValidation.addVehicle, vehicleController.addVehicle);

module.exports = router;