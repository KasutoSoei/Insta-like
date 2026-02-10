import type { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import type { JwtPayload } from "../types/auth.types";
import { asyncHandler } from "../utils/async-handler";
import { UnauthorizedError } from "../utils/http-errors";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export function createAuthMiddleware(authService: AuthService) {
  return asyncHandler(
    async (req: Request, _res: Response, next: NextFunction) => {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("No token provided");
      }

      const token = authHeader.substring(7);
      const payload = authService.verifyToken(token);

      req.user = payload;
      next();
    },
  );
}
