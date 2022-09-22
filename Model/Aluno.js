var IAluno = require("./InterfaceAluno")
var Oferta = require("./Oferta")
var State = require("./State")
const oferta = new Oferta

const low= require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const Ativo = require("./Ativo")
const adapter = new FileSync('db.json')
const db = low(adapter)
const http = require('http')

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
        this.currentState = State
        this.previousState = State
    }

    newOferta(disciplina, id, professor, vagas, periodo, perfil) {
        let o = new Oferta(disciplina, id, professor, vagas, periodo, perfil)
        this.disciplinasInscritas.push(o.disciplina)
        return o
    }

    inscreverOfertaDisciplina(idOferta) {
        if (this.checarRequerimentos()) {
            let aluno = db.get('ofertas').find({ id: idOferta }).get('alunos').value()
            
            aluno.push({ aluno: this.nome })

            db.get('ofertas').find({ id: idOferta }).assign({ alunos: aluno }).write()
        }
        return 1
    }

    getAllDisciplinasInscritas(id) {
        let disciplinas = db.get('alunos').find({id: id}).get('disciplinas').value()

        return disciplinas
    }

    getGruposAcademicosInscritos() {
        //url do sistema do grupo acadêmico
        let url = 'http://147.182.136.29:3000/students/:id'
        http.get(url,(res) => {
            let body = "";

            res.on("data", (chunk) => {
                body += chunk;
            });

            res.on("end", () => {
                try {
                    let json = JSON.parse(body);
                        return json.count
                } catch (error) {
                    console.error(error.message);
                };
            });
        
        }).on("error", (error) => {
            console.error(error.message);
        });
     }

    getPendenciasBiblioteca() {

    }

    checarRequerimentos() {
        if(this.statusMatricula = 'Ativo') {
            if(this.getPendenciasBiblioteca() == 0) {
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

    deferirDisciplina(idOferta) {
        var alunos = db.get('ofertas').find({ id : idOferta}).get('alunos').value()
        numeroAlunos = Object.keys(alunos).length
        var menor = this.ira
        var idMenor
        let vagas = db.get('ofertas').find({id: idOferta}).get('vagas').value()
        if(vagas <= numeroAlunos) {
            for(var i = 0; i < numeroAlunos; i++) {
                if(alunos[i].ira < menor) {
                    menor = alunos[i].ira
                    idMenor = alunos[i].id
                }
            }
            if(this.ira > menor) {
                db.get('ofertas').find({ id: idOferta }).get('alunos').remove({id: idMenor})
                this.inscreverOfertaDisciplina(idOferta)
            }
        }
        return true
    }

    Aluno(){
        this.currentState = new Ativo()
        this.previousState = null
    }

    ativarMatricula(){
        this.currentState.ativarMatricula(this)
    }

    trancarMatricula(){
        this.currentState.trancarMatricula(this)
    }

    suspenderMatricula(){
        this.currentState.suspenderMatricula(this)
    }

    afastarAluno(){
        this.currentState.afastarMatricula(this)
    }

    terminarCurso(){
        this.currentState.terminarCurso(this)
    }

    jubilarAluno(){
        this.currentState.jubilarAluno(this)
    }

}