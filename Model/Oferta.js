const IOferta = require("./InterfaceOferta")
var Disciplina = require("./Disciplina")
var Aluno = require("./Aluno")
var Curso = require("./Curso")

const low= require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

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
        this.disciplinas = d
        return
    }

    newAluno(nome, ira, id, perfil, statusMatricula) {
        let a = new Aluno(nome, ira, id, perfil, statusMatricula)
        this.alunos.push(a)
        return a
    }

    newCurso(nome) {
        let c = new Curso(nome)
        this.periodo = c
        return c
    }

    getAlunosDeferidos(id) {
        let alunos = db.get('ofertas').find({id: id}).get('alunos').value()

        return alunos
    }
}