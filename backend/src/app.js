import express from "express";
import cors from "cors";

import { FRONTEND_URL } from "./config/env.js";

import leetcodeRoutes from "./routes/leetcodeRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

// app.use(
//   cors({
//     origin: FRONTEND_URL,
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: [
      "https://shafee.in",
      "https://www.shafee.in",
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ],
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

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is awake 🚀",
  });
});

// Existing API
app.use("/api/leetcode", leetcodeRoutes);

// New Chat API
app.use("/api/chat", chatRoutes);

export default app;