import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";

export const validateCreateAirPolutionData = [
  body("country").notEmpty().withMessage("Validation: Country is required"),
  body("city").notEmpty().withMessage("Validation: City is required"),
  body("aqiValue").notEmpty().withMessage("Validation: AQI Value is required"),
  body("aqiCategory")
    .notEmpty()
    .withMessage("Validation: AQI Category is required"),
  body("coAqiValue")
    .notEmpty()
    .withMessage("Validation: CO AQI Value is required"),
  body("coAqiCategory")
    .notEmpty()
    .withMessage("Validation: CO AQI Category is required"),
  body("ozoneAqiValue")
    .notEmpty()
    .withMessage("Validation: Ozone AQI Value is required"),
  body("ozoneAqiCategory")
    .notEmpty()
    .withMessage("Validation: Ozone AQI Category is required"),
  body("no2AqiValue")
    .notEmpty()
    .withMessage("Validation: NO2 AQI Value is required"),
  body("no2AqiCategory")
    .notEmpty()
    .withMessage("Validation: NO2 AQI Category is required"),
  body("pm25AqiValue")
    .notEmpty()
    .withMessage("Validation: PM 2,5 AQI Value is required"),
  body("pm25AqiCategory")
    .notEmpty()
    .withMessage("Validation: PM 2,5 AQI Category is required"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    next();
  },
];

export const validateDeleteAirPolutionData = [
  param("id").notEmpty().withMessage("Validation: Id is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    next();
  },
];

export const validateUpdateAirPolutionData = [
  param("id").notEmpty().withMessage("Validation: Id is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    next();
  },
];

export const validateGetAirPolutionData = [
  param("id").notEmpty().withMessage("Validation: Id is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    next();
  },
];
