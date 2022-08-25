var Disciplina = require("./Disciplina")
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

    newDisciplina(Disciplina) {
        let d = Disciplina
        this.disciplinasInscritas.push(d)
        return d
    }

    getAllDisciplinasInscritas() {
        return this.disciplinas
    }
}