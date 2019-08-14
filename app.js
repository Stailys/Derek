const { Client } = require('discord.js')
const config = require('./private/config')
const app = new Client()


const IA = require('./src/app/index')


class On { 
    constructor() {
        this.iniciou = '{ started }'
    }
}

app.on("ready", () => {
    require('./src/routes')
    console.log(new On(this.iniciou))
    app.user.setPresence({ game: { name: 'Project', type: 1, url: 'https://www.twitch.tv/kazutuu'} })
})

app.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.startsWith(config.prefix)) return;

    let prefix = 'pesquisar '
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let msg = message;

    try {
        let commandFile = require(`./src/public/${cmd}.js`)
        commandFile.run(app, msg, args)

    } catch(e) {
        console.log(e)
    } 
})


app.login(config.token)