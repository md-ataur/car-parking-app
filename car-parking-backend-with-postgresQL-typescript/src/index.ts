import dotenv from "dotenv";
import app from "./app";
dotenv.config();
require("./config/sequelize.config");
require("./models");

const port = Number(process.env.PORT || 5000);

app.listen(port, () => {
  console.log("Listening to port", port);
});
