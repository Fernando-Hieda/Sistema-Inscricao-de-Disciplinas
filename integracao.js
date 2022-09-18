const low= require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

const getNumeroDisciplinas = (id) => {
    let disciplinas = db.get('alunos').find({id: id}).get('disciplinas').value()

    numeroDisciplinas = Object.keys(disciplinas).length
    return numeroDisciplinas 
}

exports.getNumeroDisciplinas = getNumeroDisciplinas