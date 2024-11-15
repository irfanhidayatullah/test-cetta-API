import { createAirPolutionService } from "@/services/airPolution/create-airPolution.service";
import { deleteAirPolutionService } from "@/services/airPolution/delete-airPolution.service";
import { getAllAirPolutionsService } from "@/services/airPolution/get-all-airPolution.service";
import { updateAirPolutionsService } from "@/services/airPolution/update-airPolution.service";
import { NextFunction, Request, Response } from "express";

export class AirPolutionController {
  async getAllAirPolutionController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 20,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || "createdAt",
        sortOrder: (req.query.sortOrder as string) || "desc",
        search: (req.query.search as string) || "",
      };
      const result = await getAllAirPolutionsService(query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async deleteAirPolutionController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await deleteAirPolutionService(Number(req.params.id));
      return res
        .status(200)
        .send({ message: "Delete air polution success", result });
    } catch (error) {
      next(error);
    }
  }
  async createAirPolutionController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await createAirPolutionService(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateAirPolutionController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await updateAirPolutionsService(
        Number(req.params.id),
        req.body
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
