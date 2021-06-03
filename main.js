const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command == 'help-me'){
        message.channel.send(message.author + 'צריך עזרה @Staff @High Staff')
    }
})

client.once('ready', ()=>{
    console.log('This bot is online!');
});

client.login(process.env.token);