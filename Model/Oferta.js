const IOferta = require("./InterfaceOferta")
var Disciplina = require("../Disciplina")
var Periodo = require ("../Periodo")
var Aluno = require("./Aluno")

module.exports = class Oferta extends IOferta {
    //propriedades e funções da classe 
    constructor(disciplina, id, professor, vagas, periodo, perfil) {
        super()
        this.disciplina = disciplina
        this.id = id
        this.professor = professor
        this.vagas = vagas
        this.periodo = periodo
        this.perfil = perfil
        this.alunos = []
    }

    newDisciplina(nome, key) {
        let d = new Disciplina(nome, key)
        this.disciplinas.push(d)
        return
    }

    newAluno(nome, ira, id, perfil, statusMatricula) {
        let a = new Aluno(nome, ira, id, perfil, statusMatricula)
        this.alunos.push(a)
        return a
    }

    get alunosDeferidos(){
        return this.alunos
    }

   // get getPeriodo() {
    //    return this.periodo
   // }
}