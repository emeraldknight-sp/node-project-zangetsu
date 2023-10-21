export const agreeCommand = (chatId, bot) => {
  bot.sendMessage(
    chatId,
    "Por favor, confirme seu número de telefone. Selecione a opção 'Compartilhar meu número de telefone' para prosseguir.",
  );

  const confirmationCode = Math.floor(100000 + Math.random() * 900000);

  bot.sendMessage(chatId, `Seu código de confirmação é: ${confirmationCode}`);

  bot.on("message", (msg) => {
    const userMessage = msg.text;

    if (userMessage === String(confirmationCode)) {
      bot.sendMessage(
        chatId,
        "Código de confirmação válido. Seu número de telefone está confirmado!",
      );
      // Realize as ações necessárias, como marcar o número de telefone como confirmado em seu sistema.
    } else {
      bot.sendMessage(
        chatId,
        "Código de confirmação inválido. Por favor, tente novamente.",
      );
    }
  });
};
