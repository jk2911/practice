import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
} from "routing-controllers";
import "reflect-metadata";
import { User } from "../entity/User";
import { response } from "express";
import { CreateUser } from "src/payloads";

@Controller()
export class UserController {
  @Post("/create")
  async create(@Res() responce, @Body() payload: CreateUser) {
    const user = new User();
    user.id = payload.id;
    user.phone = payload.phone;
    user.password = payload.password;
    return responce.status(201).json(user);
  }
}
