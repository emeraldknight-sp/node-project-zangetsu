import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

/*
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const text = '👋 Bem-vindo ao Zangetsu!\nComo posso ajudar?';

  bot.sendMessage(chatId, text);
});
*/

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const text = "👋 Bem-vindo ao Zangetsu! Como posso ajudar?";
  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: '📆 Agendar sinais', callback_data: 'add_signals' }],
        [{ text: '🗑️ Desagendar sinais', callback_data: 'remove_signals' }],
        [{ text: '📡 Sinais ao Vivo', callback_data: 'signals_in_live' }],
        [{ text: '💼 Sinais agendados', callback_data: 'marked_signals' }],
        [{ text: '⚙️ Configurações', callback_data: 'config' }],
        [{ text: '🧠 Estratégias', callback_data: 'strategies' }],
        [{ text: '🔄 Resetar resultados', callback_data: 'reset_results' }],
        [{ text: '👥 Alterar conta', callback_data: 'change_account' }],
        [{ text: '⏳ Vencimento', callback_data: 'maturity' }],
        [{ text: '🗣️ Idioma', callback_data: 'languages' }],
        [{ text: '🕒 Fuso-horário', callback_data: 'timezone' }],
        [{ text: '💸 Taxas', callback_data: 'fees' }]
      ]
    }
  };
  bot.sendMessage(chatId, text, options);
});

bot.on('callback_query', (query) => {
  const { message } = query;
  const chatId = message.chat.id;
  const data = query.data;
  const respostaUsuario = `/coisa ${data}`;

  const options = {
    reply_to_message_id: message.message_id
  };

  bot.sendMessage(chatId, respostaUsuario, options);
});

// bot.on('callback_query', (query) => {
//   const { message } = query;
//   const chatId = message.chat.id;
//   const data = query.data;
//   switch(data) {
//     case 'add_signals':
//       bot.sendMessage(chatId, '/add_signals');
//       break;
//     case 'remove_signals':
//       bot.sendMessage(chatId, '/remove_signals');
//       break;
//     case 'signals_in_live':
//       bot.sendMessage(chatId, '/signals_in_live');
//       break;
//     case 'marked_signals':
//       bot.sendMessage(chatId, '/marked_signals');
//       break;
//     case 'config':
//       bot.sendMessage(chatId, '/config');
//       break;
//     case 'strategies':
//       bot.sendMessage(chatId, '/strategies');
//       break;
//     case 'reset_results':
//       bot.sendMessage(chatId, '/reset_results');
//       break;
//     case 'change_account':
//       bot.sendMessage(chatId, '/change_account');
//       break;
//     case 'maturity':
//       bot.sendMessage(chatId, '/maturity');
//       break;
//     case 'languages':
//       bot.sendMessage(chatId, '/languages');
//       break;
//     case 'timezone':
//       bot.sendMessage(chatId, '/timezone');
//       break;
//     case 'fees':
//       bot.sendMessage(chatId, '/fees');
//       break;
//     default:
//       bot.sendMessage(chatId, '/invalid');
//       break;
//   }
// });

bot.on('polling_error', (error) => {
  console.log(error);
});

console.log('Zangetsu está ativo e esperando comandos!');
