module.exports = {
    name: 'help-me',
    description: "calling staff",
    execute(message, args){
        message.channel.send(message.author.username + ' צריך עזרה <@&829024828328771595> <@&829024828287221789>')
    }
}