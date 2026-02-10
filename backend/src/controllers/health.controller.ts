import type { Request, Response } from "express";

export class HealthController {
  check(_req: Request, res: Response): void {
    res.json({
      status: "ok",
      message: "Backend is running",
      timestamp: new Date().toISOString(),
    });
  }

  apiInfo(_req: Request, res: Response): void {
    res.json({
      name: "Chihuawow API",
      version: "1.0.0",
      status: "ready",
    });
  }
}
