const express = require('express');
const vehicleRoute = require('./vehicle.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/vehicle',
    route: vehicleRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
