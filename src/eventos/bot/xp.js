const Discord = require("discord.js");
const config = require('../../../config.json')
let db = require('quick.db')

module.exports = async (bot, message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

   let xp = await db.fetch(`xp_${message.guild.id}_${message.author.id}`)
   let level = db.get(`level_${message.guild.id}_${message.author.id}`)
   let xpuser = 50;

    db.add(`xp_${message.guild.id}_${message.author.id}`, xpuser)

  if(xp > 100) {
     return message.reply("**você upou de level, parabens**")
     db.subtract(`xp_${message.guild.id}_${message.author.id}`, 100)
  }
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