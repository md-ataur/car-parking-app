import express from "express";
import vehicleRoute from "./vehicle.route";
const router = express.Router();

const defaultRoutes = [
  {
    path: "/vehicles",
    route: vehicleRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export = router;
