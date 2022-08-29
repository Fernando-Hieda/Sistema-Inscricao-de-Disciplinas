const Disciplina = require('./Disciplina');

module.exports = class FactoryDisciplina {
    constructor(){
    
    }
    criaDisciplina(nome, vagas) {
        return new Disciplina(nome, vagas)
    }    
}