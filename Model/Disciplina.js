const Aluno = require("./Aluno")
const Curso = require("../Curso")

module.exports = class Disciplina {
    //propriedades e funções da classe 
    constructor(nome, id, perfil, vagas) {
        this.nome = nome
        this.id = id
        this.perfil = perfil
        this.vagas = vagas
        this.cursos = []
        this.alunos = []
    }

    newAluno(nome, ira, id, perfil, statusMatricula) {
        let a = new Aluno(nome, ira, id, perfil, statusMatricula)
        this.alunos.push(d)
        return a
    }

    newCurso(nome) {
        let c = new Curso(nome)
        this.cursos.push(c)
        return c
    }

    get allAlunos() {
        return this.alunos
    }
}