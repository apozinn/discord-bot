const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');

module.exports = async (bot, member) => {
	const canal = member.guild.channels.cache.get('801760984628330496');

	const embed = new Discord.MessageEmbed()
		.setTitle(`foi adcionado em um servidor`)
		.setDescription(`Daisuke foi adicionado no servdior um novo servidor`)
		.addField(`ID:`, `6439964725873894793286`)
		.addField(`data`, `00:00`)

	canal.send(embed);
};