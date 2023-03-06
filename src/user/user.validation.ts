import { checkSchema } from "express-validator";
import * as VALIDATION_SCHEMAS from "./constants/validation.constants";

export const signup = checkSchema({
  password: VALIDATION_SCHEMAS.SIGNUP_PASSWORD,
  phone: VALIDATION_SCHEMAS.SIGNUP_PHONE,
});
