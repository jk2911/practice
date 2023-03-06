import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

export class UserController {
  static signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { phone, password } = req.body;
      const token = await userService.signup(phone, password);
      res.status(201).json({
        message: "User has been created",
        token,
      });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { phone, password } = req.body;
      const token = await userService.login(phone, password);
      res.status(200).json({
        message: "login",
        token,
      });
    } catch (error) {
      next(error);
    }
  };
}
