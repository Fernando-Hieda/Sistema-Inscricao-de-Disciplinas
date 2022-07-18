const Aluno = require("./ModelAluno/Aluno")

module.exports = class Disciplina {
    //propriedades e funções da classe 
    constructor(nome, vagas, curso) {
        this.nome = nome
        this.vagas = vagas
        this.curso = curso
        this.alunos = []
    }

    newAluno(nome, ira, id, perfil, statusMatricula) {
        let a = new Aluno(nome, ira, id, perfil, statusMatricula)
        this.alunos.push(d)
        return a
    }

    get allAlunos() {
        return this.alunos
    }
}