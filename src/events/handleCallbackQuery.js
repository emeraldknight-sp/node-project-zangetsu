import { agreeCommand } from "../commands/agree.js";
import { desagreeCommand } from "../commands/desagree.js";
import { loginCommand } from "../commands/login.js";
import { signupCommand } from "../commands/signup.js";

export const handleCallbackQuery = (bot, query) => {
  const { message } = query;
  const chatId = message.chat.id;
  const data = query.data;

  switch (data) {
    case "login":
      loginCommand(chatId, bot);
      break;
    case "signup":
      signupCommand(chatId, bot);
      break;
    case "agree_the_terms":
      agreeCommand(chatId, bot, message);
      break;
    case "desagree_the_terms":
      desagreeCommand(chatId, bot);
      break;
  }
};
