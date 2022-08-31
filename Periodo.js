var Oferta = require("./Model/Oferta.js")

module.exports = class Periodo {
    //propriedades e funções da classe
    constructor() {
        this.perfil = perfil
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