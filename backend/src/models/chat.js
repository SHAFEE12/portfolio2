import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },

    sessionId: {
      type: String,
      default: "",
    },

    page: {
      type: String,
      default: "/",
    },

    browser: {
      type: String,
      default: "",
    },

    device: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Chat", chatSchema);