import TelegramBot from "node-telegram-bot-api";
import { isValidEmail } from "../utils/isValidEmail";
import { ExtendedUser } from "../@types/index";

export const agreeCommand = (chatId: number, bot: TelegramBot) => {
  const text = "Toque no botão abaixo para compartilhar seu contato";
  const options = {
    reply_markup: {
      keyboard: [[{ text: "Compartilhar meu contato", request_contact: true }]],
    },
  };

  bot.sendMessage(chatId, text, options);

  bot.on("contact", (msg) => {
    if (!msg.from) {
      console.error("User not found");
      return;
    }

    const user: ExtendedUser = {
      id: msg.from.id,
      is_bot: msg.from.is_bot,
      first_name: msg.from.first_name,
      last_name: msg.from?.last_name,
      username: msg.from?.username,
      language_code: msg.from?.language_code,
    };

    if (msg.contact) {
      const phoneNumber = msg.contact.phone_number;
      user.phone_number = phoneNumber;

      const receivedPhoneNumberText = `Número de telefone recebido: ${phoneNumber}.`;

      bot
        .sendMessage(chatId, receivedPhoneNumberText)
        .then(() => {
          return bot.sendMessage(chatId, "Agora me envie um email de contato.");
        })
        .catch((error) => {
          console.error("Erro ao receber dados:", error);
        });

      bot.on("text", (msg) => {
        const chatId = msg.chat.id;
        const email = msg.text;

        if (email) {
          const receivedEmailText = `Endereço de e-mail recebido: ${email}.`;
          const invalidEmailText = `Por favor, insira um endereço de e-mail válido.`;

          isValidEmail(email)
            ? bot.sendMessage(chatId, receivedEmailText)
            : bot.sendMessage(chatId, invalidEmailText);

          user.email = email;
        } else {
          bot.sendMessage(chatId, "Digite um email");
        }
      });
    } else {
      const text = `Não foi possível concluir seu cadastro. Por favor, clique em /start para reiniciar seu cadastro.`;
      bot.sendMessage(chatId, text);
    }
  });
};
