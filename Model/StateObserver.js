var Aluno = require("./Aluno.js")

module.exports = class StateObserver {
    constructor() {
    
    }

    update(msg) {
        return Aluno.getState()
    }    
}

module.exports = class ConcreteStateObserver extends StateObserver {
    constructor() {
    
    }

    update(msg) {
        return msg
    }    
}