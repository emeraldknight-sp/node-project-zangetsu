export const agreeCommand = (chatId, bot) => {
  const text = "Toque no botão abaixo para compartilhar seu contato";
  const options = {
    reply_markup: {
      keyboard: [[{ text: "Compartilhar meu contato", request_contact: true }]],
    },
  };

  bot.sendMessage(chatId, text, options);

  bot.on("contact", (msg) => {
    const user = {
      id: msg.from.id,
      username: msg.from.username,
      first_name: msg.from.first_name,
      last_name: msg.from.last_name,
      email: msg.from.email,
      phone_number: msg.from.phone_number,
      language: msg.from.language_code,
      timezone: msg.from.timezone,
      accounts: [],
    };

    if (msg.contact) {
      const phoneNumber = msg.contact.phone_number;
      user.phone_number = phoneNumber;

      bot.sendMessage(
        chatId,
        `Número de telefone ${phoneNumber} confirmado com sucesso.\n\nAgora me envie um email de contato.`,
      );
    } else {
      bot.sendMessage(
        chatId,
        "Não foi possível concluir seu cadastro. Por favor, clique em /start para reiniciar seu cadastro.",
      );
    }
  });
};
