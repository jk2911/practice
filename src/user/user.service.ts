import * as bcrypt from "bcrypt";
import { AppError } from "../errors/index";
import { generateAccessToken } from "../jwt/jwt.service";
import { User } from "../lib/user.entity";

class UserService {
  async signup(phone: string, password: string) {
    const conflict = await User.find({
      where: {
        phone: phone.toString(),
      },
    });

    if ((await conflict[0]) !== undefined) {
      throw new AppError("this phone is already registered", 400);
    }

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password.toString(), salt);

    let user = User.create({
      phone,
      password,
    });
    const token = generateAccessToken({ username: user.phone });
    const newUser = User.save(user);
    return token;
  }
  async login(phone: string, password: string) {
    const conflict = await User.find({
      where: {
        phone: phone.toString(),
      },
    });

    const validPassword = await bcrypt.compare(password, conflict[0].password);
    if (validPassword) {
      const token = generateAccessToken({ username: phone });
      return token;
    } else {
      throw new AppError("Invalid username/password supplied", 400);
    }
  }
}

export const userService = new UserService();
