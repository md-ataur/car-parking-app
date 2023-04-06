import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbHost = String(process.env.DB_HOST);
const dbName = String(process.env.DB_NAME);
const dbUser = String(process.env.DB_USER);
const dbPassword = String(process.env.DB_PASSWORD);

const DB = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  logging: false,
});

/* const sequelize = new Sequelize('postgres', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
}); */

DB.authenticate()
  .then(() => {
    console.log("Connected to database server");
  })
  .catch((error: string) => {
    console.log(`Unable to connect to database server. Error: ${error}`);
  });

module.exports = DB;
