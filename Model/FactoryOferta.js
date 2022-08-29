const Oferta = require('./Oferta');

module.exports = class FactoryOferta {
    constructor(){
    
    }
    criaOferta(nome, vagas) {
        return new Oferta(nome, vagas)
    }    
}