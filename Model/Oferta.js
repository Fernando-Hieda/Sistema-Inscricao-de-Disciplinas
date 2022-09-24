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
    
    inscreverAlunoOferta(idAluno) {
        let oferta = db.get('alunos').find({ id: idAluno }).get('disciplinas').value()

        oferta.push({ oferta: this.disciplina })

        db.get('alunos').find({ id: idAluno }).assign({ disciplinas: oferta}).write()

        return 1
    }

    listarOfertas() {
        const ofertas = db.get("ofertas").value()
        return ofertas
    }

    listarOfertasDePeriodo(periodo) {
        const ofertas = db.get("ofertas").value()

        const numeroOfertas = Object.keys(ofertas).length 
        var disciplinasPerfil = []
        for (var i = 0; i < numeroOfertas; i++) {
            if(ofertas[i].periodo == periodo)
                disciplinasPerfil.push(ofertas[i])
        }
        
        return disciplinasPerfil
    }

    getAlunosDeferidos(id) {
        let alunos = db.get('ofertas').find({id: id}).get('alunos').value()

        return alunos
    }
}