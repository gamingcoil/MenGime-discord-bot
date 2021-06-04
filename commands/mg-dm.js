module.exports = {
    name: 'mg-dm',
    description: "reqing dm",
    execute(message, args){
        message.author.send('מבקש ממנגיים לצוטט איתך')
        const channel01 = client.channels.cache.find(channel => channel.id === "850286030778793984")
        channel01.send("<@" + message.author.id + "> " + message.author.displayAvatarURL({ size: 4096, dynamic: true}))
    }
}