var Disciplina = require("./Model/Disciplina")

module.exports = class curso {
    //propriedades e funções da classe 
    constructor() {
        this.nome
        this.disciplinas = []
    }

    newDisciplina(nome, vagas, curso) {
        let d = new Disciplina(nome, vagas, curso)
        this.disciplinas.push(d)
        return d
    }
}