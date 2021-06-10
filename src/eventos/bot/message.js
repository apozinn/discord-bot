const Discord = require("discord.js");
const config = require('../../../config.json')
const Levels = require("discord-xp");

module.exports = {
  name: 'message',
  execute: async(message, bot) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`))  return message.reply(' olá!, sou o daisuke e meu prefixo é **d!**')

Levels.setURL("mongodb+srv://apozin:samuel27032004@daisuke.eb6ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
if (!message.guild) return;
if (message.author.bot) return;

const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
if (hasLeveledUp) {
  const user = await Levels.fetch(message.author.id, message.guild.id);
  message.channel.send(`${message.author}, parabens você upou pro level **${user.level}**.`);
}
 
  let prefix = config.prefix
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let arquivocmd = bot.commands.get(command.slice(prefix.length)) ||
    bot.commands.get(bot.aliases.get(command.slice(prefix.length)))
  if (arquivocmd) arquivocmd.run(bot, message, args);

  }
}