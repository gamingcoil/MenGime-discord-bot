const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command == 'help-me'){
        message.channel.send(message.author.username + ' צריך עזרה <@&829024828328771595> <@&829024828287221789>')
    }else if (command == 'help'){
        message.channel.send('רשימת הפקודות באתר https://mg-dis-cmds.herokuapp.com/')
    }else if (command == 'youtube'){
        message.channel.send('קישור לערוץ מנגיים: https://www.youtube.com/channel/UCFAAuM9m5ao_-uZMEL_94NQ')
    }else if (command == 'mg-dm'){
        message.channel.send('מבקש ממנגיים לצוטט איתך')
        const channel01 = client.channels.cache.find(channel => channel.id === "826796038316621866")
        channel01.send(message.author.tag + " " + message.author.displayAvatarURL({ size: 4096, dynamic: true}))
        // 850286030778793984
    }
})

client.once('ready', ()=>{
    console.log('This bot is online!');
});

client.login(process.env.token);