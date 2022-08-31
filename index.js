//index.js
const http = require('http'); 
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');

const low= require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)


const defaultData = {
    "alunos": [
        {
            "nome": "Matheus",
            "ira": 11000,      
            "id" : 123,
            "perfil": 2019,
            "statusMatricula": "Ativo",
            "curso": "Matematica",
            "disciplinas": [
            ]
        }
    ],
    "ofertas": [
        {
            "disciplina": "Calculo 1",
            "professor": "Laura",
            "id": 1,
            "vagas": 15,
            "periodo": "2019/1",
            "perfil": 2019,
            "alunos": [
            ]
        }
    ],
    "periodos": [
        {
          "semestre": "2019/1",
          "ofertas": []
        }
    ]
}
db.defaults(defaultData).write()

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
const ControllerOferta= require("./Controllers/OfertaController")
const ControleOferta= new ControllerOferta

app.get('/ofertas', (req, res, next) => { 
    const ofertas = db.get("ofertas").value()
    
    res.send(ofertas)
})


app.get('/alunos', (req, res, next) => {
    const alunos = db.get("alunos").value()
    
    res.send(alunos)
})


app.post('/alunos', (req, res, next) => {
    console.log("Postou um aluno!");
    
    nome = req.body.name
    ira = req.body.ira
    id = req.body.id
    perfil = req.body.perfil
    statusMatricula = req.body.statusMatricula
    curso = req.body.curso
    
    aluno = ControleAluno.criaAluno(nome, ira, id, perfil, statusMatricula, curso)
    
    res.json(aluno)
})

app.get('/inscricao_disciplina', (req, res, next) => {
    let aluno = db.get('alunos').find({ id: 123 }).value()
    
    nome = aluno.name
    ira = aluno.ira
    id = aluno.id
    perfil = aluno.perfil
    statusMatricula = aluno.statusMatricula
    curso = aluno.curso

    aluno1 = ControleAluno.criaAluno(aluno, ira, id, perfil, statusMatricula, curso)
    aluno1.inscreverOfertaDisciplina(1)

    // disciplina1 = ControleOferta.criaOferta("Mat", 1, "Laura", 15, "2019/1", perfil)
    // disciplina1.inscreverAlunoOferta(123)

    res.send(aluno)
})

app.get('/defere_disciplina', (req, res, next) => { 
    aluno1 = ControleAluno.criaAluno("Matheus",11000, 123, 2019, "Ativo", "Mat")
    aluno1.defereOfertaDisciplina(1)
    
})

const server = http.createServer(app); 
server.listen(3001);
console.log("Servidor express escutando na porta 3001...")

exports.db = db