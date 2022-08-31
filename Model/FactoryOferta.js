const Oferta = require('./Oferta');

module.exports = class FactoryOferta {
    constructor(){
    
    }
    criaOferta(disciplina, id, professor, vagas, periodo, perfil) {
        return new Oferta(disciplina, id, professor, vagas, periodo, perfil)
    }    
}