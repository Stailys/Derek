const { Client, RichEmbed } = require('discord.js')
const config = require('../../private/config.json')
const client = new Client()


client.on("message", async message => {
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
        if(code.e == "MODULE_NOT_FOUND") return;
        console.log(e)
    } 
})



        /*

        O evento do começo da conversa da inteligencia artificial !


        */

client.on("message", async message => {

    if (message.content === 'Derek') {
        message.reply('Sim senhor! Oque você precisa?')
    }

    if (message.content === 'derek') {
        message.reply('Sim senhor! Oque você precisa?')
    }

    if (message.content === 'oi derek') {
        message.reply('Olá, posso ajudar?')
    }

    if (message.content === 'Oi derek') {
        message.reply('Olá, posso ajudar?')
    }

    if (message.content === 'Oi') {
    message.reply('Oi você está precisando de ajuda?')
    }

    if (message.content === 'oi') {
        message.reply('Oi você está precisando de ajuda?')
    }


    




        /*

       "educação" da inteligencia artificial


        */



    if (message.content  === 'Tudo bom?') {
        message.reply('Estou bem, e você?')
    }

    if (message.content  === 'Tudo bem?') {
        message.reply('To de boa na lagoa, tranquilo com esquilo')
    }

    if (message.content  === 'tudo bem?') {
        message.reply('To de boa na lagoa, tranquilo com esquilo')
    }

    if (message.content === 'tudo bom?') {
        message.reply('Estou bem, e você?')
    }

    if (message.content === 'Como vai?') {
        message.reply('Eu vou indo bem e você?')
    }
 
    if (message.content === 'como vai?') {
        message.reply('Eu vou indo bem e você?')
    }

    if (message.content === 'Tudo bom com vc derek?') {
        message.reply('Estou de boas e você bro?')
    }

    if (message.content === 'tudo bom com vc derek?') {
        message.reply('Estou de boas e você bro?')
    }


    if (message.content === 'Td bm com vc?') {
        message.reply('Estou ótimo e vc?')
    }

    if (message.content === 'Td bm com vc?') {
        message.reply('Estou ótimo e vc?')
    }

    if (message.content === 'Td bm e vc?') {
        message.reply('Estou ótimo e vc?')
    }
    
    if (message.content === 'td bm e vc?') {
        message.reply('Estou ótimo e vc?')
    }


    if (message.content === 'tudo bem com vc derek?') {
        message.reply('Estou ótimo e vc?')
    }

    if (message.content === 'Tudo bem com vc derek?') {
        message.reply('Estou ótimo e vc?')
    }

    /*

    Desembolo com a conversa

    */


    if (message.content === 'Estou bem') {
        message.reply('Que bom, posso te ajudar em alguma coisa?')
    }


    if (message.content === 'estou bem') {
        message.reply('Que bom, posso te ajudar em alguma coisa?')
    }

    if (message.content === 'To de boa') {
        message.reply('Que bommm, você está procurando alguma coisa? Posso te ajudar?')
    }

    if (message.content === 'to de boa') {
        message.reply('Que bommm, você está procurando alguma coisa? Posso te ajudar?')
    }

    if (message.content === 'Vou seguindo a vida') {
        message.reply('Você está triste? ')
    }
    
    if (message.content === 'vou seguindo a vida') {
        message.reply('Você está triste? ')
    }

    if (message.content === 'Estou triste') {
        message.reply('Oque está acontecendo com você?')
    }

    if (message.content === 'estou triste') {
        message.reply('Oque está acontecendo com você?')
    }


    if (message.content === 'Não to bem') {
        message.reply('Aconteceu alguma coisa?')
    }


    if (message.content === 'não to bem') {
        message.reply('Aconteceu alguma coisa?')
    }

    if (message.content === 'Não estou muito bem') {
        const { orando_ } = require('./emojis')
        message.reply('Relaxa, respire fundo e acredite que isso vai melhorar, estou orando por você ! ' + orando_)
    }


    if (message.content === 'Não estou muito bem') {
        const { orando_ } = require('./emojis')
        message.reply('Relaxa, respire fundo e acredite que isso vai melhorar, estou orando por você ! ' + orando_)
    }


    if (message.content === 'Estou mais ou menos!') {
        message.reply('Relaxa, vamos seguir em frente !!')
    }

    
    if (message.content === 'estou mais ou menos!') {
        message.reply('Relaxa, vamos seguir em frente !!')
    }

    /*

    Continuação do bate-papo

    */


    /*

    sistema de ajuda interno!
     const { ta } = require('../images/ta') 

    */

    if (message.content === 'Derek, painel') {
    const { Thumb_Inicial } = require('./img')
    const { P } = require('./color')

    let iaE = new RichEmbed()
    .setTitle('Meu Painel de Ajuda !') 
    .setImage(Thumb_Inicial) 
    .addField('Meu sistema de pesquisa é bem fraco, por isso sou limitado a algumas coisas !', '`\`\`css\nPara pesquisar use => pesquisar <nome> `\`\`')
    .addField('Caso queriam alguma ajuda de todas as pesquisas que eu tenho, use :', '`\`\`css\nderek pesquisas ! `\`\`')
    .setFooter('Espero ter ajudado! :D')
    .setColor(P) 
    message.channel.send(iaE)
    }

    if (message.content === 'derek, painel') {
        const { Thumb_Inicial } = require('./img')
        const { P } = require('./color')
    
        let iaE = new RichEmbed()
        .setTitle('Meu Painel de Ajuda !') 
        .setImage(Thumb_Inicial) 
        .addField('Meu sistema de pesquisa é bem fraco, por isso sou limitado a algumas coisas !', '`\`\`css\nPara pesquisar use => pesquisar <nome> `\`\`')
        .addField('Caso queriam alguma ajuda de todas as pesquisas que eu tenho, use :', '`\`\`css\nderek pesquisas ! `\`\`')
        .setFooter('Espero ter ajudado! :D')
        .setColor(P) 
        message.channel.send(iaE)
        }

    if (message.content === 'mostrar painel de ajuda') {
        const { Thumb_Inicial } = require('./img')
        const { P } = require('./color')
    
        let iaER = new RichEmbed()
        .setTitle('Meu Painel de Ajuda !') 
        .setImage(Thumb_Inicial) 
        .addField('Meu sistema de pesquisa é bem fraco, por isso sou limitado a algumas coisas !', '`\`\`css\nPara pesquisar use => pesquisar <nome> `\`\`')
        .addField('Caso queriam alguma ajuda de todas as pesquisas que eu tenho, use :', '`\`\`css\nderek pesquisas ! `\`\`')
        .setFooter('Espero ter ajudado! :D')
        .setColor(P) 
        message.channel.send(iaER)
    }

    if (message.content === 'Mostrar painel de ajuda') {
        const { Thumb_Inicial } = require('./img')
        const { P } = require('./color')
    
        let iaER = new RichEmbed()
        .setTitle('Meu Painel de Ajuda !') 
        .setImage(Thumb_Inicial) 
        .addField('Meu sistema de pesquisa é bem fraco, por isso sou limitado a algumas coisas !', '`\`\`css\nPara pesquisar use => pesquisar <nome> `\`\`')
        .addField('Caso queriam alguma ajuda de todas as pesquisas que eu tenho, use :', '`\`\`css\nderek pesquisas ! `\`\`')
        .setFooter('Espero ter ajudado! :D')
        .setColor(P) 
        message.channel.send(iaER)
    }

    if (message.content === 'painel de ajuda') {
        const { Thumb_Inicial } = require('./img')
        const { P } = require('./color')
    
        let iaER = new RichEmbed()
        .setTitle('Meu Painel de Ajuda !') 
        .setImage(Thumb_Inicial) 
        .addField('Meu sistema de pesquisa é bem fraco, por isso sou limitado a algumas coisas !', '`\`\`css\nPara pesquisar use => pesquisar <nome> `\`\`')
        .addField('Caso queriam alguma ajuda de todas as pesquisas que eu tenho, use :', '`\`\`css\nderek pesquisas ! `\`\`')
        .setFooter('Espero ter ajudado! :D')
        .setColor(P) 
        message.channel.send(iaER)
    }

    
    if (message.content === 'Painel de ajuda') {
        const { Thumb_Inicial } = require('./img')
        const { P } = require('./color')
    
        let iaER = new RichEmbed()
        .setTitle('Meu Painel de Ajuda !') 
        .setImage(Thumb_Inicial) 
        .addField('Meu sistema de pesquisa é bem fraco, por isso sou limitado a algumas coisas !', '`\`\`css\nPara pesquisar use => pesquisar <nome> `\`\`')
        .addField('Caso queriam alguma ajuda de todas as pesquisas que eu tenho, use :', '`\`\`css\nderek pesquisas ! `\`\`')
        .setFooter('Espero ter ajudado! :D')
        .setColor(P) 
        message.channel.send(iaER)
    }

    /*

    Informação

    */

    if (message.content === 'derek pesquisas') {
        message.reply('Ainda não tenho nenhuma ! ``<Provavelmente não foi feita pelo meu desenvolvedor!>``')
    }


    if (message.content === 'derek pesquisa') {
        message.reply('Ainda não tenho nenhuma ! ``<Provavelmente não foi feita pelo meu desenvolvedor!>``')
    }


    if (message.content === 'Derek pesquisas') {
        message.reply('Ainda não tenho nenhuma ! ``<Provavelmente não foi feita pelo meu desenvolvedor!>``')
    }


    if (message.content === 'Derek pesquisa') {
        message.reply('Ainda não tenho nenhuma ! ``<Provavelmente não foi feita pelo meu desenvolvedor!>``')
    }


    /*

    Github infos

    */
    
    const github = 'https://github.com/Stailys/Derek'
    
    if (message.content === 'mostrar github') {
        message.reply(github)
    }

    if (message.content === 'Mostrar github') {
        message.reply(github)
    }


    /*

    Desenbolo parte 2

    */


    if (message.content === 'Oque você esta fazendo?') {
        message.reply('Estou fazendo aboslutamente nada, e você?')
    }

    if (message.content === 'oque você esta fazendo?') {
        message.reply('Estou fazendo aboslutamente nada, e você?')
    }

    if (message.content === 'Esta fazendo algo de bom?') {
        message.reply('Estou recebendo agora um novo uptade nos meus dados, nada de mais, e você?')
    }

    if (message.content === 'esta fazendo algo de bom?') {
        message.reply('Estou recebendo agora um novo uptade nos meus dados, nada de mais, e você?')
    }

    if (message.content === 'oq faz de bom?') {
        message.reply('Estou navegando pelos meus dados para ver se eu encontro algum erro! E você?')
    }
    
    if (message.content === 'Oq faz de bom?') {
        message.reply('Estou navegando pelos meus dados para ver se eu encontro algum erro! E você?')
    }

    if (message.content === 'Oq esta fznd de bm?') {
        message.reply('Estou atoa neste momento!') 
    }


    
    if (message.content === 'oq esta fznd de bm?') {
        message.reply('Estou atoa neste momento!') 
    }

    /*

    Desenbolo parte2 v2

    */

    if (message.content === 'Estou fazendo nada') {
        const { piscadinha_ } = require('./emojis')
        message.reply('Estou normalmente gosto de não fazer nada ' + piscadinha_)
    }

    if (message.content === 'estou fazendo nada') {
        const { piscadinha_ } = require('./emojis')
        message.reply('Estou normalmente gosto de não fazer nada ' + piscadinha_)
    }



    /*

    Parte OWNEW

    */
})

client.on("message", async message => {
    
    if (message.content === 'mostrar painel de desenvolvedor') {
        
        if (message.author.id !== '569328425186230283') {
            let perm = new RichEmbed()
            .setDescription('Você não tem a permissão suficiente para visualizar este painel !')
            .setColor('BLACK')
            message.channel.send(perm)
            return
        }

        const { Thumb_Inicial } = require('./img')
        let p = new RichEmbed()
        .setTitle('PAINEL DO DESENVOLVEDOR!')
        .addField('Completamento da I.A', 'máx: 40%')
        .addField('Tradução?', 'Sem decisão tomada!')
        .addField('Finalização do projeto:', 'sem data estimada')
        .addField('Inspiração:', 'Estou sendo inspirado no jarvis, na versão discord !')
        .setColor('BLACK')
        .setImage(Thumb_Inicial)
        message.channel.send(p)
    }


    if (message.conetent == 'derek, info') {
        if (message.author.id !== '569328425186230283') {
            let perm = new RichEmbed()
            .setDescription('Você não tem a permissão suficiente para visualizar este painel !')
            .setColor('BLACK')
            message.channel.send(perm)
            return
        }

        const { Thumb_Inicial } = require('./img')
        let p = new RichEmbed()
        .setTitle('PAINEL DO DESENVOLVEDOR!')
        .addField('Completamento da I.A', 'máx: 40%')
        .addField('Tradução?', 'Sem decisão tomada!')
        .addField('Finalização do projeto:', 'sem data estimada')
        .addField('Inspiração:', 'Estou sendo inspirado no jarvis, na versão discord !')
        .setColor('BLACK')
        .setImage(Thumb_Inicial)
        message.channel.send(p)
    }

    if (message.content === 'upar code para git') {
        message.channel.send('Estou upando agora meus codes ' + `<@569328425186230283>`)
    }


})

client.login(config.token)