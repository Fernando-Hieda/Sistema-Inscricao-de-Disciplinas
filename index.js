//index.js
const http = require('http'); 
const express = require('express'); 
const app = express(); 
 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})
 
app.get('/clientes', (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'luiz'}]);
}) 
 
const server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...")


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