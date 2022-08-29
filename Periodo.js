var Oferta = require("./Oferta.js")

module.exports = class Periodo {
    //propriedades e funções da classe
    constructor(nome) {
        this.nome
        this.ofertas = [] 
    }

    newOferta() {
        let o = new Oferta()
        this.ofertas.push(o)
        return o
    }

    listarOfertas() {
        return this.ofertas
    }
}