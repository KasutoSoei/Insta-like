import type { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import type { LoginDto } from "../types/auth.types";
import { asyncHandler } from "../utils/async-handler";
import { UnauthorizedError } from "../utils/http-errors";
import {type RegisterUserSchemaType, RegisterUserSchema } from "../types/auth.types";

export class AuthController {
  private readonly authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  register = asyncHandler(async (req: Request, res: Response) => {
    
    const data = req.body;
    const parseData = RegisterUserSchema.safeParse(data);
    if (parseData.success === false){
      
    }
    const result = await this.authService.register(data);
    res.status(201).json({ success: true, data: result });
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const data: LoginDto = req.body;
    const result = await this.authService.login(data);
    res.json({ success: true, data: result });
  });

  getMe = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user?.userId;
    if (!userId) {
      throw new UnauthorizedError("Unauthorized");
    }

    const user = await this.authService.getUserById(userId);
    res.json({ success: true, data: user });
  });
}
