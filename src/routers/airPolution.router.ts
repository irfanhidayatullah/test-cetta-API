import { AirPolutionController } from "@/controllers/airPolution.controller";
import { adminGuard } from "@/middleware/adminGuard";
import { verifyToken } from "@/middleware/verifyToken";
import {
  validateCreateAirPolutionData,
  validateDeleteAirPolutionData,
  validateGetAirPolutionData,
  validateUpdateAirPolutionData,
} from "@/validators/airPolution.validator";
import { Router } from "express";

export class AirPolutionRouter {
  private router: Router;
  private airPolutionController: AirPolutionController;

  constructor() {
    this.airPolutionController = new AirPolutionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      "/",
      this.airPolutionController.getAllAirPolutionController
    );
    this.router.post(
      "/",
      verifyToken,
      adminGuard,
      validateCreateAirPolutionData,
      this.airPolutionController.createAirPolutionController
    );
    this.router.get(
      "/:id",
      validateGetAirPolutionData,
      this.airPolutionController.getAirPolutionByIdController
    );
    this.router.delete(
      "/:id",
      verifyToken,
      adminGuard,
      validateDeleteAirPolutionData,
      this.airPolutionController.deleteAirPolutionController
    );
    this.router.patch(
      "/:id",
      verifyToken,
      adminGuard,
      validateUpdateAirPolutionData,
      this.airPolutionController.updateAirPolutionController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
