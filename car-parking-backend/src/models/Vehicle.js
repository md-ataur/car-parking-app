const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Vehicle = sequelize.define('vehicle', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  licenseNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_type: {
    type: DataTypes.ENUM,
    values: ['car', 'microbus', 'truck'],
  },
  charge: {
    type: DataTypes.ENUM,
    values: ['car_charge', 'microbus_charge', 'truck_charge'],
  },
  date_of_entry: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  date_of_exit: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time_of_entry: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time_of_exit: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING
  }
});

/* Vehicle
  .sync({ alter: true })
  .then((result) => {
    console.log("The table for the Vehicle model was just (re)created!");
  })
  .then((err) => {
    console.log(err)
  });
 */
module.exports = Vehicle;