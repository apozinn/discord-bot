const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
	name: 'messageDelete',
	execute: async(message, bot) => {
		if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	const deletionLog = fetchedLogs.entries.first();
	const canalogs = db.get(`canalogs_${message.guild.id}`);
	const canal = message.guild.channels.cache.get(`${canalogs}`);
	const { executor, target } = deletionLog;
	if (target.id === message.author.id) {

	let embed = new Discord.MessageEmbed()
		.setTitle(message.author.tag)
		.setColor('#15226D')
		.setDescription(`**Apagada por:** ${executor}\n\n**Canal da mensagem:** ${message.channel}\n\n**Mensagem:**\n \`\`\` 
		${message.content} \`\`\` `)
		.setFooter(message.guild.name, message.guild.iconURL({format: "png"}))
		.setTimestamp()
	canal.send(embed)
	} else {
		let embed2 = new Discord.MessageEmbed()
		.setTitle(message.author.tag)
		.setColor('#15226D')
		.setDescription(`**Apagada por:** ${message.author}\n\n**Canal da mensagem:** ${message.channel}\n\n**Mensagem:**\n \`\`\` 
		${message.content} \`\`\` `)
		.setFooter(message.guild.name, message.guild.iconURL({format: "png"}))
		.setTimestamp()
	canal.send(embed2)
	 }
	}
}
	