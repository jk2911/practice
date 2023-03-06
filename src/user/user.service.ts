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

    console.log(await conflict[0])
    console.log(await conflict)

    if (await conflict[0] !== undefined) {
      throw new AppError('this phone is already registered', 422);
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
  async login(phone: string, password: string) {}
}

export const userService = new UserService();
