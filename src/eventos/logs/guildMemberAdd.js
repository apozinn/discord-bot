const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
	name: 'guildMemberAdd',
	execute: async(member, bot) => {
		let autorole = db.get(`autorole_${member.guild.id}`);
	member.roles.add(`${autorole}`)
	
	const welcomeM = db.get(`welcomeM_${member.guild.id}`);
	const configM = db.get(`configM_${member.guild.id}`);
	const welchannel = db.get(`welchannel_${member.guild.id}`);
	const canal = member.guild.channels.cache.get(`${welchannel}`);

	if (configM === "mensagem") {
		canal.send(`${welcomeM}`)
	} else if (configM === "embed") {
		const embed = new Discord.MessageEmbed()
			.setDescription(`${welcomeM}`)
			.setColor('#15226D')
  canal.send(embed).catch((err) => console.log(err.stack));
	}
	}
}
