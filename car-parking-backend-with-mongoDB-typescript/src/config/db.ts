import mongoose from "mongoose";

mongoose
  .connect(`mongodb://127.0.0.1:27017/vehilces_db`)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error(error);
  });

/* mongoose.connect(
  `mongodb+srv://dbuser1:9P2AGUUElq70TuhK@cluster0.juclx.mongodb.net/myDBStore?retryWrites=true&w=majority`
); */

module.exports = mongoose.connection;
