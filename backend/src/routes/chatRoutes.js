import express from "express";
import { saveChat, getChats } from "../controllers/chatController.js";

const router = express.Router();

// Save a visitor message
router.post("/", saveChat);

// Get all visitor messages
router.get("/", getChats);

export default router;