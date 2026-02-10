import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes/index";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";
import { logger } from "./middlewares/logger.middleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Global middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use(router);

// Error handling (must be last)
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
