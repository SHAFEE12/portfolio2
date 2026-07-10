import Chat from "../models/Chat.js";

// Save a new chat message
export const saveChat = async (req, res) => {
  try {
    const {
      message,
      sessionId,
      browser,
      device,
      page,
    } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    const chat = await Chat.create({
      message,
      sessionId,
      browser,
      device,
      page,
    });

    res.status(201).json({
      success: true,
      data: chat,
    });
  } catch (error) {
    console.error("Save Chat Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get all chat messages
export const getChats = async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: chats.length,
      data: chats,
    });
  } catch (error) {
    console.error("Get Chats Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};