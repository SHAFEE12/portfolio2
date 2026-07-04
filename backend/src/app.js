import express from "express";
import cors from "cors";

import { FRONTEND_URL } from "./config/env.js";

import leetcodeRoutes from "./routes/leetcodeRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend Running 🚀",
    version: "1.0.0",
  });
});

app.use("/api/leetcode", leetcodeRoutes);

export default app;