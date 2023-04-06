import express, { type Application, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import routes from "./routes/v1/index";

const app: Application = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// Getting status of application and version
app.get("/", (req: Request, res: Response) => {
  const serverStatus = {
    name: "Car parking app",
    status: "UP",
    version: "1.0.0",
  };
  res.status(200).json(serverStatus);
});

// v1 api routes
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new Error("Not found"));
});

export = app;
