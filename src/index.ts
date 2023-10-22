import TelegramBot, { Message, CallbackQuery } from "node-telegram-bot-api";
import { handleCallbackQuery } from "./events/handleCallbackQuery";
import { startCommand } from "./events/interactions";
import { config } from "dotenv";

config();

if (process.env.TELEGRAM_TOKEN) {
  const token: string = process.env.TELEGRAM_TOKEN;
  const options = { polling: true };
  const bot: TelegramBot = new TelegramBot(token, options);

  bot.onText(/\/start/, (msg: Message) => {
    startCommand(bot, msg.chat.id);
  })

  bot.on("callback_query", (query: CallbackQuery) => {
    handleCallbackQuery(bot, query);
  });

  bot.on("polling_error", (error: Error) => {
    console.log(error);
  });
} else {
  console.error(
    "Erro: Token do Telegram não encontrado. Verifique suas variáveis de ambiente.",
  );
}

console.log("Zangetsu está ativo e esperando comandos!");
