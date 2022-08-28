const Disciplina = require('./Disciplina');

module.exports = class FactoryDisciplina {
    constructor(){
    
    }
    criaDisciplina(nome, key, cursos) {
        return new Disciplina(nome, key, cursos)
    }    
}