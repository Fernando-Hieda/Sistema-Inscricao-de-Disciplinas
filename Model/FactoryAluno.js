const Aluno = require('./Aluno');

module.exports = class FactoryAluno {
    constructor(){
    
    }
    criaAluno(nome, ira, id, perfil, statusMatricula) {
        return new Aluno(nome, ira, id, perfil, statusMatricula)
    }    
}