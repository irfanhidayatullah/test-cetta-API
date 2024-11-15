import { AuthController } from "@/controllers/auth.controller";
import { validateLogin } from "@/middleware/validator";
import { Router } from "express";

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      "/login",
      validateLogin,
      this.authController.loginController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
