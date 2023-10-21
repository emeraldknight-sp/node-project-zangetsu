export function startCommand(bot, chatId) {
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
