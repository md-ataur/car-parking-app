import express from "express";
const router = express.Router();
/* const { vehicleValidation } = require("../../validations");
const { vehicleController } = require("../../controllers"); */

/* router.get("/", vehicleController.getVehicles);
router.post("/add", vehicleValidation.addVehicle, vehicleController.addVehicle);
router.get("/:id", vehicleController.getVehicleById);
router.patch("/update/:id", vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle); */

router.get("/", (req, res) => {
  res.status(200).json("vehicle route");
});

export = router;
