const Afastado = require("./Afastado")
const Aluno = require("./Aluno")
const Formado = require("./Formado")
const Jubilado = require("./Jubilado")
const MatriculaTrancada = require("./MatriculaTrancada")
const State = require("./State")
const Suspenso = require("./Suspenso")

module.exports = class Ativo extends State {
    Aluno = new Aluno

    trancarMatricula(Aluno){
        console.log("Email: Matrícula Trancada")
        Aluno.setCurrentState(new MatriculaTrancada)
        Aluno.setPreviousState(this)
    }

    suspenderMatricula(){
        console.log("Email: Matrícula Suspensa")
        Aluno.setCurrentState(new Suspenso)
        Aluno.setPreviousState(this)
    }

    afastarAluno(){
        console.log("Email: Afastado")
        Aluno.setCurrentState(new Afastado)
        Aluno.setPreviousState(this)
    }

    terminarCurso(){
        console.log("Email: Curso Finalizado")
        Aluno.setCurrentState(new Formado)
        Aluno.setPreviousState(this)

        console.log("Diploma disponível em breve")
    }

    jubilarAluno(){
        console.log("Email: Jubilado")
        Aluno.setCurrentState(new Jubilado)
        Aluno.setPreviousState(this)

        Aluno.disciplinas = []
    }
}