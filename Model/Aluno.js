var IAluno = require("./InterfaceAluno")
var Oferta = require("./Oferta")
var Curso = require("../Curso")
const oferta = new Oferta

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

    newOferta(disciplina, professor, vagas, periodo, perfil) {
        let o = new Oferta(disciplina, professor, vagas, periodo, perfil)
        this.disciplinasInscritas.push(o.disciplina)
        return o
    }

    inscreverOfertaDisciplina(id) {
        return 1
    }

    getAllDisciplinasInscritas() {
        return this.disciplinasInscritas
    }

    getGruposAcademicosInscritos() {

    }

    checarRequerimentos() {
        if(this.statusMatricula = 'Ativo') {
            if(this.pendenciasBiblioteca = 0) {
                if(this.gruposAcademicosInscritos <= 2) {
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

    inscreverDisciplina(id) {
          // if(this.checarRequerimentos() = true) {
            //    if(oferta.perfil == this.perfil) {
                    //defere

              //  }
                //concorrer usando o ira
          // }
    }

    deferirDisciplina() {
        
    }

}