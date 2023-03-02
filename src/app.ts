import { useExpressServer } from "routing-controllers";
import dotenv from "dotenv";
import log4js from "log4js";
import { UserController } from "./controller/user-controller";
import express, { Express } from "express";
import bodyParser from "body-parser";

dotenv.config();

const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;

const app: Express = express();

app.use(bodyParser.json());

useExpressServer(app, {
  controllers: [UserController], // we specify controllers we want to use
});
const port = process.env.PORT;

app.listen(port, () => console.log(`Running on port ${port}`));

logger.info("application start");
