/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";
import vehicleValidation from "../../validations";
import vehicleController from "../../controllers";
const router = express.Router();

// router.get("/", vehicleController.getVehicles);
router.post("/add", vehicleValidation.addVehicle, vehicleController.addVehicle);
// router.post("/add", vehicleValidation.addVehicle, vehicleController.addVehicle);
// router.get("/:id", vehicleController.getVehicleById);
// router.patch("/update/:id", vehicleController.updateVehicle);
// router.delete("/:id", vehicleController.deleteVehicle);

export = router;
