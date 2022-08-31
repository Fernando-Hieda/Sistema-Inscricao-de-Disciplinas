const IOferta = require("./InterfaceOferta")
var Disciplina = require("./Model/Disciplina")
var Periodo = require ("../Periodo")
var Aluno = require("./Model/Aluno")

module.exports = class Oferta extends IOferta {
    //propriedades e funções da classe 
    constructor(disciplina, professor, vagas, perfil, periodo, alunos) {
        this.disciplina = disciplina
        this.professor = professor
        this.vagas = vagas
        this.periodo = periodo
        this.perfil = perfil
        this.alunos = []
    }

    newAluno(nome, ira, id, perfil, statusMatricula) {
        let a = new Aluno(nome, ira, id, perfil, statusMatricula)
        this.alunos.push(d)
        return a
    }

    get alunosDeferidos(){
        return this.alunos
    }

   // get getPeriodo() {
    //    return this.periodo
   // }
}