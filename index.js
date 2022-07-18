const Aluno = require("./Aluno")
const Disciplina = require("./Disciplina")

const aluno1 = new Aluno("Matheus", 14000, 123, 2019, "Ativo")
const disciplina1 = new Disciplina("Mat", 14, "Mat")
const disciplina2 = new Disciplina("Fis", 20, "Mat")

console.log(aluno1)
console.log(disciplina1)
console.log(disciplina2)

aluno1.newDisciplina("Mat", 14, "Mat")
aluno1.newDisciplina("Fis", 20, "Mat")

console.log(aluno1)
console.log(aluno1.allDisciplinas)