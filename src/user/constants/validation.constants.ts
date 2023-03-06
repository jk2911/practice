import { ParamSchema } from 'express-validator';

export const SIGNUP_PASSWORD: ParamSchema = {
  in: 'body',
  isLength: {
    errorMessage: 'Password must be at least 7 chars long',
    options: {
      min: 7,
    },
  },
};

export const SIGNUP_PHONE: ParamSchema = {
  in: 'body',
  isLength: {
    errorMessage: 'Phone must be at least 7 numbers long',
    options: {
      min: 7,
    },
  },
};

