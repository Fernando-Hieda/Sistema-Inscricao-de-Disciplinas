const Ativo = require("./Ativo")
const State = require("./State")
const Suspenso = require("./Suspenso")

module.exports = class MatriculaTrancada extends State {
    constructor() {
    
    }

    ativarMatricula(){
        console.log("Email: Matricula Reativada")
        Aluno.setCurrentState(new Ativo)
        Aluno.setPreviousState(this)
    }

    suspenderMatricula(){
        console.log("Email: Matrícula Suspensa")
        Aluno.setCurrentState(new Suspenso)
        Aluno.setPreviousState(this)
    }
}