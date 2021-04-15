const Discord = require("discord.js");
const config = require('../../../config.json')

module.exports = async (bot, message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`))  return message.channel.send('**meu prefixo é g!**') 

  let prefix = config.prefix
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let arquivocmd = bot.commands.get(command.slice(prefix.length)) ||
    bot.commands.get(bot.aliases.get(command.slice(prefix.length)))
  if (arquivocmd) arquivocmd.run(bot, message, args);

}