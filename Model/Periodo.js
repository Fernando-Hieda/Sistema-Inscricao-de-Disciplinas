var Oferta = require("./Oferta.js")

module.exports = class Periodo {
    //propriedades e funções da classe
    constructor() {
        this.semestre = semestre
        this.ofertas = [] 
    }

    newOferta() {
        let o = new Oferta()
        this.ofertas.push(o)
        return o
    }

    listarOfertas(semestre) {
        let ofertas = db.get('periodos').find({semestre: semestre}).get('alunos').value()

        return ofertas
    }
}