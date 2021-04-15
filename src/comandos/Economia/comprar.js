const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "comprar",
        aliases: ['comprar'],
        description: "comprar itens da Loja",
        usage: "comprar"
    },
    run: async (bot, message, args) => {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('**é necessário um item**')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'carro' || 'Carro'){
            if (db.has(`variable`, { items: ["Carro"] })){
                return message.reply("**você já tem um carro! **")

} else {
            if(amount < 500) return message.channel.send('**você não tem dinheiro o suficiente para comprar esse item**');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "Carro");
            message.channel.send('**você comprou um carro com sucesso**')
        }
    }
        if(purchase === 'relogio' || 'Relógio'){
            if(amount < 250) return message.channel.send('**você não tem dinheiro o suficiente para comprar esse item**');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Relógio");
            message.channel.send('**você comprou um relógio com sucesso**')
        }
    }
}
