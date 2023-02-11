const express = require("express");
const cors = require("cors");
const routes = require("./routes/v1");

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// Getting status of application and verison
app.get("/", async (req, res) => {
  const serverStatus = {
    name: "Car parking app",
    status: "UP",
    version: "1.0.0",
    date: "13 Jan 2023",
  };
  res.status(200).json(serverStatus);
});

// v1 api routes
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new Error("Not found"));
});

module.exports = app;
