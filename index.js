const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = (process.env.prefix);


client.on('ready', ()=>{
    console.log('This bot is online!');
})

client.on('message', msg=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).spilt(/ +/);
    const command = args.shift().toLowerCase();
    if(msg.content === "helpme"){
        msg.reply('צריך אתכם<@829024828287221789>');
    }
})

client.login(process.env.token);
