const Aluno = require("./Aluno")
const Curso = require("../Curso")

module.exports = class Disciplina {
    //propriedades e funções da classe 
    constructor(nome, key, cursos) {
        this.nome = nome
        this.key = key
        this.cursos = []
    }

    newCurso(nome) {
        let c = new Curso(nome)
        this.cursos.push(c)
        return c
    }
}