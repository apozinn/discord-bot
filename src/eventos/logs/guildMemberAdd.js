const Discord = require('discord.js');
const db = require('quick.db')
module.exports = async (bot, member) => {
	let autorole = db.get(`autorole_${member.guild.id}`);
	member.roles.add(`${autorole}`)
	
	const welchannel = db.get(`welchannel_${member.guild.id}`);
	const canal = member.guild.channels.cache.get(`${welchannel}`);
	
	const embed = new Discord.MessageEmbed()
	   .setDescription(`**<@${member.user.id}> seja bem vindo ao ${member.guild.name}, se divirta!**`)
	   .setColor('#ff210e')
  canal.send(embed).catch((err) => console.log(err.stack));
};
