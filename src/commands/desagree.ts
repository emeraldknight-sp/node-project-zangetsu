import TelegramBot from "node-telegram-bot-api";

export const desagreeCommand = (chatId: number, bot: TelegramBot) => {
  bot.sendMessage(
    chatId,
    `Ok, respeito sua posição. Infelizmente não poderemos dar continuidade ao seu cadastro.\n
Pressione /start para iniciar novamente se mudar de ideia.`,
  );
};
