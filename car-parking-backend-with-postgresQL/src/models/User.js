const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize.config");

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

/* User
  .sync({ alter: true })
  .then((result) => {
    console.log("The table for the User model was just (re)created!");
  })
  .then((err) => {
    console.log(err)
  }); */

module.exports = User;
