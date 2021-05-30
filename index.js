const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('ready', ()=>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "hello"){
        msg.reply('hello friend');
    }
})

bot.login(process.env.token);