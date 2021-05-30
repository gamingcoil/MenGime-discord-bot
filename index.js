const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

client.once('ready', ()=>{
    console.log('This bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command.content === 'helpme'){
        message.channel.send('צריך אתכם<@829024828287221789>');
    }
});

client.login(process.env.token);
