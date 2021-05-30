const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODQ4NDE2NTYyNDEwMTYwMTM4.YLMTfw.t0yGjrdFK7QcABfhNkWnZ8Zvyf8';

bot.on('ready', ()=>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "hello"){
        msg.reply('hello friend');
    }
})

bot.login(token);