const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const prefix = '!';
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));
for (const file of commandFiles){
    const command = require (`./commands/${file}`);

     bot.commands.set(command.name,command);
}
bot.login(token);

bot.once('ready',()=>{
    console.log('This bot is online')
});


bot.on('message', message=>{
    if(!message.content.startsWith(prefix)|| message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    
    switch(args[0]){
        case 'ping':
            bot.commands.get('ping').execute(message,args);
            break;

        case 'whoareyou':
            bot.commands.get('whoareyou').execute(message,args);
            break;
            
        case 'author':
            bot.commands.get('author').execute(message,args);       
            break;
    }


})

