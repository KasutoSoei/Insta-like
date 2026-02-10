import type { Request, Response } from "express";
import { UserService } from "../services/user.service";
import type { Prisma } from "@prisma/client";
import { asyncHandler } from "../utils/async-handler";

export class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getAll = asyncHandler(async (_req: Request, res: Response) => {
    const users = await this.userService.findAll();
    res.json({ success: true, data: users });
  });

  getById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.findById(id);
    res.json({ success: true, data: user });
  });

  create = asyncHandler(async (req: Request, res: Response) => {
    const data: Prisma.UserCreateInput = req.body;
    const user = await this.userService.create(data);
    res.status(201).json({ success: true, data: user });
  });

  update = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data: Prisma.UserUpdateInput = req.body;
    const user = await this.userService.update(id, data);
    res.json({ success: true, data: user });
  });

  delete = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.userService.delete(id);
    res.json({ success: true, message: "User deleted successfully" });
  });
}
