import { NextFunction, Request, Response } from "express";

export const updateData = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.country) {
    res.status(400).send("The country name cannot be changed");
  }
  if (req.body.city) {
    res.status(400).send("The city name cannot be changed");
  }
};
