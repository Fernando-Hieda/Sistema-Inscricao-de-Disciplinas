const Ativo = require("./Ativo")
const MatriculaTrancada = require("./MatriculaTrancada")
const State = require("./State")
const Suspenso = require("./Suspenso")

module.exports = class Afastado extends State {
    constructor() {
    
    }

    ativarMatricula(){
        console.log("Email: Matricula Reativada")
        Aluno.setCurrentState(new Ativo)
        Aluno.setPreviousState(this)
    }

    trancarMatricula(){
        console.log("Email: Matrícula Trancada")
        Aluno.setCurrentState(new MatriculaTrancada)
        Aluno.setPreviousState(this)
    }

    suspenderMatricula(){
        console.log("Email: Matrícula Suspensa")
        Aluno.setCurrentState(new Suspenso)
        Aluno.setPreviousState(this)
    }
}