import dotenv from "dotenv";
import app from "./app";
require("./config/db");
dotenv.config();

const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
