var Oferta = require("./Oferta.js")

module.exports = class Periodo {
    //propriedades e funções da classe
    constructor(semestre, ano) {
        this.semestre = semestre
        this.ano = ano
        this.ofertas = [] 
    }

    newOferta() {
        let o = new Oferta()
        this.ofertas.push(o)
        return o
    }
}