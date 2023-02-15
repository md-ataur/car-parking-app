const express = require("express");
const todoRoute = require("./todo.route");
const vehicleRoute = require("./vehicle.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/todos",
    route: todoRoute,
  },
  {
    path: "/vehicles",
    route: vehicleRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
