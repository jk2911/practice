import { DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";
import { User } from "../lib/user.entity";

dotenv.config();

if (!process.env.DB_PASSWORD)
  throw new Error("Database password is not defined");
if (!process.env.DB_HOST) throw new Error("Database host is not defined");
if (!process.env.DB_USERNAME)
  throw new Error("Database username is not defined");
if (!process.env.DB_NAME) throw new Error("Database name is not defined");

export const DB: DataSourceOptions = {
  type: "mssql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  //port: 1433,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
  options: {
    encrypt: false,
  },
};

export const config = {
  DEV: {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    DB,
  },
};
