import { AirPolutionController } from "@/controllers/airPolution.controller";
import { updateData } from "@/middleware/airPolutionMiddleware";
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
      this.airPolutionController.createAirPolutionController
    );
    this.router.delete(
      "/:id",
      this.airPolutionController.deleteAirPolutionController
    );
    this.router.patch(
      "/:id",
      updateData,
      this.airPolutionController.updateAirPolutionController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
