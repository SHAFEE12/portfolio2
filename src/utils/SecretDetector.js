import { SECRET_COMMANDS } from "./commands";

export default function detectSecret(message) {
  if (!message) return false;

  const text = message.trim().toLowerCase();

  return SECRET_COMMANDS.some(command =>
    text.includes(command.toLowerCase())
  );
}