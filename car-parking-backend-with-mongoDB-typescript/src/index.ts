import dotenv from "dotenv";
require("./config/db");

dotenv.config();

import app from "./app";
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
