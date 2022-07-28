const InterfaceAluno = require("../ModelAluno/InterfaceAluno")
const FactoryAluno = require("../ModelAluno/FactoryAluno")

const FaAluno = new FactoryAluno
const IAluno = new InterfaceAluno

module.exports = class ControllerAluno {
    //funcionalidades da classe Aluno
    createAluno(nome, ira, id, perfil, statusMatricula) {
        var aluno = FaAluno.criaAluno(nome, ira, id, perfil, statusMatricula)
        return aluno
    }

    inscricaoDisciplina(nome, vagas, curso)

    allDisciplinasInscritas(id) {
        var aluno = FactoryAluno.createAluno(id)
        return aluno.allDisciplinasInscritas
    }
}