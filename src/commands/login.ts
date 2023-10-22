import TelegramBot from "node-telegram-bot-api";

export const loginCommand = (chatId: number, bot: TelegramBot) => {
  bot.sendMessage(chatId, "OK. Você será logado!");
};
