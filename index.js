const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '&';


client.on('ready', ()=>{
    console.log('This bot is online!');
})

client.on('message', msg=>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    
    const args = msg.content.slice(prefix.length).spilt(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command.content === "helpme"){
        msg.channel.send('צריך אתכם<@829024828287221789>');
    }
})

client.login(process.env.token);
