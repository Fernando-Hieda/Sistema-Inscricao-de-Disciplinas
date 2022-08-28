//index.js
const http = require('http'); 
const express = require('express'); 
const app = express(); 

const ControllerAluno = require("./Controllers/AlunoController")
const ControleAluno = new ControllerAluno
const FactoryDisciplina = require("./Model/FactoryDisciplina")

const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/alunos', (req, res, next) => { 
    console.log("Retornou todos alunos!");
    var alunos = []

    aluno = ControleAluno.criaAluno("Matheus", 14000, 123, 2019, "Ativo")
    alunos.push(aluno)
    aluno = ControleAluno.criaAluno("Vitor", 12000, 321, 2020, "Ativo")
    alunos.push(aluno)
    
    const FDisciplina = new FactoryDisciplina
    const disciplina1 = FDisciplina.criaDisciplina("Mat", 14, "Mat")
    aluno.newDisciplina(disciplina1.nome)

    res.json([aluno])
    // res.json([alunos, aluno, aluno.getAllDisciplinasInscritas()])
}) 
 
const server = http.createServer(app); 
server.listen(3001);
console.log("Servidor express escutando na porta 3001...")


// const FactoryDisciplina = require("./Model/FactoryDisciplina")
// const FactoryAluno = require("./Model/FactoryAluno")

// // const aluno1 = new Aluno("Matheus", 14000, 123, 2019, "Ativo")
// const FDisciplina = new FactoryDisciplina
// const disciplina1 = FDisciplina.criaDisciplina("Mat", 14, "Mat")
// const disciplina2 = FDisciplina.criaDisciplina("Fis", 20, "Mat")

// const FAluno = new FactoryAluno
// const aluno2 = FAluno.criaAluno("Matheus", 14000, 123, 2019, "Ativo")

// // console.log(aluno1)
// console.log(disciplina1)
// // console.log(disciplina2)
// console.log(aluno2)

// aluno2.newDisciplina(disciplina1.nome)
// aluno2.newDisciplina(disciplina2.nome)

// // console.log(aluno1)
// console.log(aluno2.allDisciplinasInscritas)