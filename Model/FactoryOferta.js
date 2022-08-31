const Oferta = require('./Oferta');

module.exports = class FactoryOferta {
    constructor(){
    
    }
    criaOferta(disciplina, professor, vagas, perfil) {
        return new Oferta(disciplina, professor, vagas, perfil)
    }    
}