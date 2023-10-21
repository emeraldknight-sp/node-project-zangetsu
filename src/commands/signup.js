export const signupCommand = (chatId, bot) => {
  const text = `\nPara garantir sua segurança e conformidade, siga estas etapas:\n
  Antes de começarmos, por favor, leia e aceite nossos termos e condições: [Termos e condições](https://docs.google.com/document/d/1_ynWHf43nAtiQsGyAt_zIiAM6dNibdbAYv1jAYslSdk/edit?usp=sharing)\n
  `;
  const accept = "Você concorda com os termos e condições?";

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ SIM", callback_data: "agree_the_terms" },
          { text: "❌ NÃO", callback_data: "desagree_the_terms" },
        ],
      ],
    },
  };

  const disable_web_page_preview = { disable_web_page_preview: true };

  bot
    .sendMessage(chatId, text, {
      parse_mode: "Markdown",
      ...disable_web_page_preview,
    })
    .then(() => {
      return bot.sendMessage(chatId, accept, {
        ...options,
        ...disable_web_page_preview,
      });
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem:", error);
    });
};
