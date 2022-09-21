const Afastado = require("./Afastado")
const Ativo = require("./Ativo")
const MatriculaTrancada = require("./MatriculaTrancada")
const State = require("./State")

module.exports = class Suspenso extends State {
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

    afastarAluno(){
        console.log("Email: Afastado")
        Aluno.setCurrentState(new Afastado)
        Aluno.setPreviousState(this)
    }
}