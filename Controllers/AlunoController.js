const IAluno = require("../Model/InterfaceAluno")
const FactoryAluno = require("../Model/FactoryAluno")
module.exports = class ControllerAluno {
    //funcionalidades da classe Aluno
    FAluno = new FactoryAluno
    IAluno = new IAluno
    criaAluno(nome, ira, id, perfil, statusMatricula) {
        return this.FAluno.criaAluno(nome, ira, id, perfil, statusMatricula)
    }
        
}