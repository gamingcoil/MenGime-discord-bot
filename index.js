const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '&';


client.on('ready', ()=>{
    console.log('This bot is online!');
})

<<<<<<< HEAD
client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).spilt(/ +/);
    const command = args.shift().toLowerCase();
    if(message.content === "helpme"){
        message.reply('צריך אתכם<@829024828287221789>');
=======
client.on('message', msg=>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    
    const args = msg.content.slice(prefix.length).spilt(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command.content === "helpme"){
        msg.channel.send('צריך אתכם<@829024828287221789>');
>>>>>>> dcdd3341debfd273ad9ef8951fc1090df36220d7
    }
})

client.login(process.env.token);
