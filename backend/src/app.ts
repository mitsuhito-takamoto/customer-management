import express from "express";
import cors from "cors";
import { apiRoutes } from "./routes/index";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandler";

export const app = express();

app.use(cors());
app.use(express.json());
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api", apiRoutes);
app.use(notFoundHandler);
app.use(errorHandler);
