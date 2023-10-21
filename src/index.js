import TelegramBot from "node-telegram-bot-api";

import { TELEGRAM_TOKEN } from "./config.js";

import { startCommand } from "./events/interactions.js";
import { handleCallbackQuery } from "./events/handleCallbackQuery.js";

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  startCommand(bot, msg.chat.id);
});

bot.on("callback_query", (query) => {
  handleCallbackQuery(bot, query);
});

bot.on("polling_error", (error) => {
  console.log(error);
});

console.log("Zangetsu está ativo e esperando comandos!");

