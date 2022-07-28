var Disciplina = require("../ModelDisciplina/Disciplina")
var IAluno = require("./InterfaceAluno")

module.exports = class Aluno extends IAluno{
    //propriedades e funções da classe Aluno
    constructor(nome, ira, id, perfil, statusMatricula) {
        super()
        this.nome = nome
        this.ira = ira
        this.id = id
        this.perfil = perfil
        this.statusMatricula = statusMatricula
        this.disciplinasInscritas = []
    }

    newDisciplina(nome, vagas, curso) {
        let d = new Disciplina(nome, vagas, curso)
        this.disciplinasInscritas.push(d)
        return d
    }

    get allDisciplinasInscritas() {
        return this.disciplinas
    }
}