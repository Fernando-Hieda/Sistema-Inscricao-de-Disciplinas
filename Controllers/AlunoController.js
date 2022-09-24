const IAluno = require("../Model/InterfaceAluno")
const FactoryAluno = require("../Model/FactoryAluno")

module.exports = class ControllerAluno extends IAluno{
    //funcionalidades da classe Aluno
    FAluno = new FactoryAluno
    IAluno = new IAluno
    
    criaAluno(nome, ira, id, perfil, statusMatricula, curso) {
        return this.FAluno.criaAluno(nome, ira, id, perfil, statusMatricula, curso)
    }
    
    newOferta(disciplina, id, professor, vagas, periodo, perfil) {
        return this.IAluno.newOferta(disciplina, professor, vagas, periodo, perfil)
    }

    inscreverOfertaDisciplina(idAluno, idOferta) {
        return this.IAluno.inscreverOfertaDisciplina(id)
    }

    listarAlunos(){
        return this.IAluno.listarAlunos()
    }

    listarDisciplinasInscritas(id) {
        return this.IAluno.listarDisciplinasInscritas(id)
    }

    listarGruposAcademicos(id) {
        return this.IAluno.listarGruposAcademicos(id)
    }
}