import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { PORT } from "./config/env.js";
import connectDB from "./config/db.js";

// Connect to MongoDB
await connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});