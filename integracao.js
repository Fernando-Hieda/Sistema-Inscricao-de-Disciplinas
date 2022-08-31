const low= require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

const getNumeroDisciplinas = (id) => {
    let n = db.get('alunos').find({id: id}).get('ofertas').value()

    return n 
}

exports.getNumeroDisciplinas = getNumeroDisciplinas