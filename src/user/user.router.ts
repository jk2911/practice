import express, { Application } from "express";
import { UserController } from "./user.controller";
import * as validate from "./user.validation";
import {validatePayload} from "../middleware/index"

const router = express.Router();

router.post("/signup", validate.signup, validatePayload, UserController.signup);
router.post("/login", validate.signup, validatePayload, UserController.login)

export function mountRouter(app: Application) {
  app.use("/user", router);
}
