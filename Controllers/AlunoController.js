const IAluno = require("../Model/InterfaceAluno")
const FactoryAluno = require("../Model/FactoryAluno")

module.exports = class ControllerAluno extends IAluno{
    //funcionalidades da classe Aluno
    FAluno = new FactoryAluno
    IAluno = new IAluno
    
    criaAluno(nome, ira, id, perfil, statusMatricula, curso) {
        return this.FAluno.criaAluno(nome, ira, id, perfil, statusMatricula, curso)
    }
    
    newOferta(disciplina, professor, vagas, periodo, perfil) {
        return this.IAluno.newOferta(disciplina, professor, vagas, periodo, perfil)
    }

    inscreverOfertaDisciplina(id) {
        return this.IAluno.inscreverOfertaDisciplina(id)
    }

    getAllDisciplinasInscritas(id){
        return this.IAluno.getAllDisciplinasInscritas(id)
    }
}