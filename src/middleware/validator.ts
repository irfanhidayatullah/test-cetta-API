import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateLogin = [
  body("email")
    .notEmpty()
    .withMessage("Validation: Email is required")
    .isEmail(),
  body("password")
    .notEmpty()
    .withMessage("Validation: Password is required")
    .isLength({ min: 6 })
    .isStrongPassword({
      minNumbers: 1,
      minUppercase: 1,
      minLowercase: 1,
      minSymbols: 1,
    }),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    next();
  },
];
