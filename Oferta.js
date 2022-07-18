var Disciplina = require("../Disciplina")

module.exports = class Oferta {
    //propriedades e funções da classe 
    constructor() {
        this.disciplinas = []
    }

    newDisciplina(nome, vagas, curso) {
        let d = new Disciplina(nome, vagas, curso)
        this.disciplinas.push(d)
        return d
    }
}