/* eslint-disable no-undef */
import TelegramBot from "node-telegram-bot-api";
import { handleCallbackQuery } from "./events/handleCallbackQuery.js";
import { startCommand } from "./events/interactions.js";
import { config } from "dotenv";

config();

if (process.env.TELEGRAM_TOKEN) {
  const token = process.env.TELEGRAM_TOKEN;
  const options = { polling: true };
  const bot = new TelegramBot(token, options);

  bot.onText(/\/start/, (msg) => {
    startCommand(bot, msg.chat.id);
  });

  bot.on("callback_query", (query) => {
    handleCallbackQuery(bot, query);
  });

  bot.on("polling_error", (error) => {
    console.log(error);
  });
} else {
  console.error(
    "Erro: Token do Telegram não encontrado. Verifique suas variáveis de ambiente.",
  );
}

console.log("Zangetsu está ativo e esperando comandos!");
