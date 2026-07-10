import express from "express";
import cors from "cors";

import { FRONTEND_URL } from "./config/env.js";

import leetcodeRoutes from "./routes/leetcodeRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend Running 🚀",
    version: "1.0.0",
  });
});

// Existing API
app.use("/api/leetcode", leetcodeRoutes);

// New Chat API
app.use("/api/chat", chatRoutes);

export default app;