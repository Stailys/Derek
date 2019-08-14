const { Client } = require('discord.js')

exports.run = async (app, message, args) => {
    let messageClient = `${app.users.size}`

    message.channel.send(messageClient + ' usuários !')
}