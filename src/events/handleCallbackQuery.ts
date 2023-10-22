import TelegramBot, { CallbackQuery, Message } from "node-telegram-bot-api";
import { loginCommand } from "../commands/login";
import { signupCommand } from "../commands/signup";
import { agreeCommand } from "../commands/agree";
import { desagreeCommand } from "../commands/desagree";

export const handleCallbackQuery = (bot: TelegramBot, query: CallbackQuery) => {
  const message: Message | undefined = query.message;

  if (!message) {
    console.error("Undefined message in handleCallbackQuery.");
    return;
  }

  const chatId = message.chat.id;
  const data = query.data;

  switch (data) {
    case "login":
      loginCommand(chatId, bot);
      break;
    case "signup":
      signupCommand(chatId, bot);
      bot.on("callback_query", (query) => {
        const data = query.data;

        data === "agree_the_terms"
          ? agreeCommand(chatId, bot)
          : desagreeCommand(chatId, bot);
      });
      break;
  }
};
