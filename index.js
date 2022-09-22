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
const ControleOferta= new ControllerOferta

app.get('/ofertas', (req, res, next) => { 
    const ofertas = db.get("ofertas").value()
    
    res.send(ofertas)
})


app.get('/alunos', (req, res, next) => {
    const alunos = db.get("alunos").value()
    
    res.send(alunos)
})

app.get('/alunos/:id', (req, res, next) => {
    id = req.params.id
    id = Number(id)
    
    const disciplinas = db.get("alunos").find({ id: id }).get('disciplinas').value()

    numeroDisciplinas = Object.keys(disciplinas).length 
    
    res.send({disciplinas, numeroDisciplinas })
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
    id = req.params.id
    id = Number(id)

    let aluno = db.get('alunos').find({ id: id }).value()
    
    nome = aluno.name
    ira = aluno.ira
    id = aluno.id
    perfil = aluno.perfil
    statusMatricula = aluno.statusMatricula
    curso = aluno.curso


    // aluno1 = ControleAluno.criaAluno(aluno, ira, id, perfil, statusMatricula, curso)
    // aluno1.inscreverOfertaDisciplina(1)
    // aluno1.inscreverOfertaDisciplina(2)

    // disciplina1 = ControleOferta.criaOferta("Cálculo 1", 1, "Laura", 15, "2019/1", 2019)
    // disciplina1.inscreverAlunoOferta(123)

    // disciplina1 = ControleOferta.criaOferta("Física 1", 2, "Jorge", 10, "2019/1", 2018)
    // disciplina1.inscreverAlunoOferta(123)
    res.send(aluno.getAllDisciplinasInscritas(id))
})

app.get('/defere_disciplina', (req, res, next) => { 
    aluno1 = ControleAluno.criaAluno("Pedro", 8000, 456, 2020, "Ativo", "Fisica")
    aluno1.defereOfertaDisciplina(1)
    
})

app.get('/lista_disciplina/:periodo', (req, res, next) => { 

    periodo = req.params.periodo
    const ofertas = db.get("ofertas").value()

    numeroOfertas = Object.keys(ofertas).length 
    var disciplinasPerfil = []
    for (var i = 0; i < numeroOfertas; i++) {
        if(ofertas[i].periodo == periodo)
            disciplinasPerfil.push(ofertas[i])
    }
    
    res.send(disciplinasPerfil)
})

const server = http.createServer(app); 
server.listen(process.env.PORT || 3001);
console.log("Servidor express escutando na porta 3001...")

exports.db = db