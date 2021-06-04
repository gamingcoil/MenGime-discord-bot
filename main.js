const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require('./commands/${file}');

    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command == 'help-me'){
        client.commands.get('help-me').execute(message, args);
    }else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    }else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command == 'mg-dm'){
        client.commands.get('mg-dm').execute(message, args);
    }else if (command == ''){
        message.channel.send('')
    }
})

client.once('ready', ()=>{
    console.log('This bot is online!');
});

client.login(process.env.token);