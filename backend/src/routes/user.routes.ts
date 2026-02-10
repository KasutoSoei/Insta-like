import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { prisma } from "../lib/prisma";

const userService = new UserService(prisma);
const userController = new UserController(userService);

export const userRoutes = Router();

userRoutes.get("/users", userController.getAll);
userRoutes.get("/users/:id", userController.getById);
userRoutes.post("/users", userController.create);
userRoutes.put("/users/:id", userController.update);
userRoutes.delete("/users/:id", userController.delete);
