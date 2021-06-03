const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command == 'help-me'){
        message.channel.send(message.author.username + ' צריך עזרה <@&829024828328771595> <@&829024828287221789>')
    }
})

client.once('ready', ()=>{
    console.log('This bot is online!');
});

client.login(process.env.token);