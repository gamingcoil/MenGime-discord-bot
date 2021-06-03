const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

client.once('ready', ()=>{
    console.log('This bot is online!');
});

client.login(process.env.token);