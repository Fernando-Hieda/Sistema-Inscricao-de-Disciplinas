var IAluno = require("./InterfaceAluno")
var Oferta = require("./Oferta")
const oferta = new Oferta

const low= require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports = class Aluno extends IAluno{
    //propriedades e funções da classe Aluno
    constructor(nome, ira, id, perfil, statusMatricula, curso) {
        super()
        this.nome = nome
        this.ira = ira
        this.id = id
        this.perfil = perfil
        this.statusMatricula = statusMatricula
        this.curso = curso
        this.disciplinasInscritas = []
    }

    newOferta(disciplina, id, professor, vagas, periodo, perfil) {
        let o = new Oferta(disciplina, professor, vagas, periodo, perfil)
        this.disciplinasInscritas.push(o.disciplina)
        return o
    }

    inscreverOfertaDisciplina(id) {
        let aluno = db.get('ofertas').find({ id: 1 }).get('alunos').value()
        
        aluno.push({ aluno: this.nome })

        db.get('ofertas').find({ id: 1 }).assign({ alunos: aluno }).write()

        return 1
    }

    getAllDisciplinasInscritas(id) {
        let disciplinas = db.get('alunos').find({id: id}).get('disciplinas').value()

        return disciplinas
    }

    getGruposAcademicosInscritos() {

    }

    getPendenciasBiblioteca() {

    }

    checarRequerimentos() {
        if(this.statusMatricula = 'Ativo') {
            if(this.getPendenciasBiblioteca() = 0) {
                if(this.getGruposAcademicosInscritos() <= 2) {
                    return true;
                }
                console.log("Erro: No maximo 2 grupos academicos para se inscrever em uma oferta")
                return false;
            }
            console.log("Erro: Nao pode haver dependencias na biblioteca para se inscrever em uma oferta.")
            return false;
       }
       console.log("Erro: Matricula deve estar ativa para se inscrever em uma oferta.")
       return false;
    }

    deferirDisciplina() {
        
    }

}