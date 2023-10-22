import TelegramBot from "node-telegram-bot-api";

export function startCommand(bot: TelegramBot, chatId: number) {
  const text = "👋 Bem-vindo ao Zangetsu! Como posso ajudar?";
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🆕 Fazer registro", callback_data: "signup" },
          { text: "➡ Iniciar sessão", callback_data: "login" },
        ],
      ],
    },
  };
  bot.sendMessage(chatId, text, options);
}
