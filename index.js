//index.js
const http = require('http'); 
const express = require('express'); 
const app = express(); 
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

const ControllerAluno = require("./Controllers/AlunoController")
const ControleAluno = new ControllerAluno
const FactoryDisciplina = require("./Model/FactoryDisciplina")
const FDisciplina = new FactoryDisciplina

app.get('/ofertas', (req, res, next) => { 
    console.log("Retornou todas Ofertas!");
    
    res.json([ofertas])
})

app.get('/inscricao_disciplina', (req, res, next) => { 
    
})

app.post('/alunos', (req, res, next) => {
    console.log("Retornou todos alunos!");
    
    nome = req.body.name
    id = req.body.id

    for (let i = 0; i < alunos.length(); i ++) {
        if(alunos[i].nome = nome)
            res.json(alunos[i])
    }
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