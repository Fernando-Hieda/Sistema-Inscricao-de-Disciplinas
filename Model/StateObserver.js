var Aluno = require("./Aluno.js")

module.exports = class StateObserver {
    constructor() {
        this.alunos = []
    
    }

    subscribe(idAluno) {
        let aluno = db.get('alunos').find({id : idAluno}).value()
        this.alunos.push(aluno)
    }

    unsubscribe(idAluno) {
        for(var i = 0; i < this.alunos.length; i++) {
            if(idAluno == alunos[i].id) {
                alunos[i] = null
                for(;i < this.alunos.length - 1;) {
                    alunos[i] = alunos[i++]
                }
            }
        }
    }

    update(msg) {
        return Aluno.getState()
    }    
}

/* module.exports = class ConcreteStateObserver extends StateObserver {
    constructor() {
    
    }

    update(msg) {
        return msg
    }    
}*/