const Disciplina = require('./Disciplina');

module.exports = class FactoryDisciplina {
    constructor(){
    
    }
    criaDisciplina(nome, id, perfil, vagas) {
        return new Disciplina(nome, id, perfil, vagas)
    }
}