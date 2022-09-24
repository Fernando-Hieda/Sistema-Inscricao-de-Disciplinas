//index.js
const http = require('http'); 
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');

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
app.use(cors())
app.get('/', (req, res, next) => {
    res.json({message: "Tela Inicial, para começar acrescente /alunos ou /ofertas na url"});
})

const ControllerAluno = require("./Controllers/AlunoController")
const ControleAluno = new ControllerAluno
const ControllerOferta= require("./Controllers/OfertaController")
const ControleOferta = new ControllerOferta

disciplina1 = ControleOferta.criaOferta("Cálculo 1", 1, "Laura", 15, "2019/1", 2019)
aluno1 = ControleAluno.criaAluno('Pedro', 8000, 784687, 2020, "Ativo", "Física")

app.get('/ofertas', (req, res, next) => { 
    ofertas = disciplina1.listarOfertas()
    res.send(ofertas)
})


app.get('/alunos', (req, res, next) => {
    alunos = aluno1.listarAlunos()
    res.send(alunos)
})

app.get('/alunos/:id', (req, res, next) => {
    id = req.params.id
    id = Number(id)

    json = aluno1.listarDisciplinasInscritas(id)

    res.send(json)
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

app.get('/inscricao_disciplina/:idAluno/:idOferta', (req, res, next) => {
    idAluno = req.params.idAluno
    idAluno = Number(idAluno)

    idOferta = req.params.idOferta
    idOferta = Number(idOferta)

    aluno1.inscreverOfertaDisciplina(idAluno, idOferta)

    //disciplina1 = ControleOferta.criaOferta("Cálculo 1", 1, "Laura", 15, "2019/1", 2019)
    //disciplina1.inscreverAlunoOferta(123)

    // disciplina1 = ControleOferta.criaOferta("Física 1", 2, "Jorge", 10, "2019/1", 2018)
    // disciplina1.inscreverAlunoOferta(123)
    res.send(aluno1)
})

app.get('/defere_disciplina', (req, res, next) => { 
    aluno1 = ControleAluno.criaAluno("Pedro", 8000, 456, 2020, "Ativo", "Fisica")
    aluno1.defereOfertaDisciplina(1)
})

app.get('/lista_disciplina/:periodo', (req, res, next) => { 
    periodo = req.params.periodo

    ofertas = disciplina1.listarOfertasDePeriodo(periodo)
    
    res.send(ofertas)
})

app.get('/lista_grupos_academicos/:id', (req, res, next) => {
    id = req.params.id
    id = Number(id)
    
    json = aluno1.listarGruposAcademicos(id)
    
    res.send(json)
})

const server = http.createServer(app); 
server.listen(process.env.PORT || 3001);
console.log("Servidor express escutando na porta 3001...")

exports.db = db