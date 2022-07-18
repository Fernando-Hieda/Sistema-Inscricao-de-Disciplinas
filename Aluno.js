var Disciplina = require("./Disciplina")

module.exports = class Aluno {
    //propriedades e funções da classe Aluno
    constructor(nome, ira, id, perfil, statusMatricula) {
        this.nome = nome
        this.ira = ira
        this.id = id
        this.perfil = perfil
        this.statusMatricula = statusMatricula
        this.disciplinas = []
    }

    newDisciplina(nome, vagas, curso) {
        let d = new Disciplina(nome, vagas, curso)
        this.disciplinas.push(d)
        return d
    }

    get allDisciplinas() {
        return this.disciplinas
    }
}