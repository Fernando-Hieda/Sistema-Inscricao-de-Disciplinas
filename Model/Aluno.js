var Oferta = require("./Oferta")
var IAluno = require("./InterfaceAluno")

module.exports = class Aluno extends IAluno{
    //propriedades e funções da classe Aluno
    constructor(nome, ira, id, perfil, statusMatricula) {
        super()
        this.nome = nome
        this.ira = ira
        this.id = id
        this.perfil = perfil
        this.statusMatricula = statusMatricula
        this.disciplinasInscritas = []
    }

    newOferta(Oferta) {
        let o = Oferta
        this.disciplinasInscritas.push(o)
        return o
    }

    getAllDisciplinasInscritas() {
        return this.disciplinasInscritas
    }
}