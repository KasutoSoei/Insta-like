import { Router } from "express";
import { HealthController } from "../controllers/health.controller";

const healthController = new HealthController();

export const healthRoutes = Router();

healthRoutes.get("/health", healthController.check);
healthRoutes.get("/api", healthController.apiInfo);
