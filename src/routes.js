require('../app')
require('./app/index')


class App {
    constructor(Derek) {
        this.app = 'Derek'
    }
}

class Private {
    constructor(Private) {
        this.token = 'Token pegado com sucesso !'
    }
}


class IA {
    constructor(InteligenciaArtificial) {
        this.IA = '{ inteligencia atificial carregada }'
    }
}

console.log(new Private(this.token))
console.log(new App(this.app))
console.log(new IA(this.IA))
