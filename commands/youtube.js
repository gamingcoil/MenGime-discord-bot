module.exports = {
    name: 'youtube',
    description: "sending link",
    execute(message, args){
        message.author.send('קישור לערוץ מנגיים: https://www.youtube.com/channel/UCFAAuM9m5ao_-uZMEL_94NQ')
    }
}