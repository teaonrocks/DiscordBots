module.exports={
    name:'author',
    description: 'display author of bot',

    execute(message,args){
        const Discord = require('discord.js');
        const authorEmbed = new Discord.MessageEmbed()
            .addField("Author's Name",message.author.username);
            message.channel.send(authorEmbed);

          
    }
}