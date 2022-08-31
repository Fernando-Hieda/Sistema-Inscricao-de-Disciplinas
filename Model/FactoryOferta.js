const Oferta = require('./Oferta');

module.exports = class FactoryOferta {
    constructor(){
    
    }
    criaOferta(disciplina, professor, vagas, periodo, perfil) {
        return new Oferta(disciplina, professor, vagas, periodo, perfil)
    }    
}