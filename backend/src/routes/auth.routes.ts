import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { createAuthMiddleware } from "../middlewares/auth.middleware";
import { prisma } from "../lib/prisma";

const authService = new AuthService(prisma);
const authController = new AuthController(authService);
const authMiddleware = createAuthMiddleware(authService);

export const authRoutes = Router();

// Public routes
authRoutes.post("/register", authController.register);
authRoutes.post("/login", authController.login);

// Protected routes
authRoutes.get("/me", authMiddleware, authController.getMe);
