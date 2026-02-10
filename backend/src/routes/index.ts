import { Router } from "express";
import { healthRoutes } from "./health.routes";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";

export const router = Router();

// Health check routes
router.use(healthRoutes);

// Auth routes (public + protected)
router.use(authRoutes);

// API routes
router.use(userRoutes);
