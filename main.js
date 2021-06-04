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
        const channel01 = client.channels.cache.find(channel => channel.id === "850286030778793984")
        channel01.send("<@" + message.author.id + "> " + message.author.displayAvatarURL({ size: 4096, dynamic: true}))
        
        
    }else if (command == 'ticket'){
        const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    
    channel.setParent("850310460208054294");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send("Thank you for contacting support!");

    try {
      await reactionMessage.react(":lock:");
      await reactionMessage.react(":no_entry:");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case ":lock:":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case ":no_entry:":
          channel.send("Deleting this channel in 5 seconds!");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    message.channel
      .send(`We will be right with you! ${channel}`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 7000);
        setTimeout(() => message.delete(), 3000);
      })
      .catch((err) => {
        throw err;
      });

    }
})

client.once('ready', ()=>{
    console.log('This bot is online!');
});

client.login(process.env.token);