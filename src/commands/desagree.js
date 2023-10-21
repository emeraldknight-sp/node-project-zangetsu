export const desagreeCommand = (chatId, bot) => {
  bot.sendMessage(
    chatId,
    "Você não aceitou os termos.\nPressione /start para iniciar novamente.",
  );
};
