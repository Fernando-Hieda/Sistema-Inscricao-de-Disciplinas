module.exports = class State {
    constructor() {
    
    }

    ativarMatricula(){
        this._WARNING('ativarMatricula(statusMatricula)')
    }

    trancarMatricula(){
        this._WARNING('trancarMatricula(statusMatricula)')
    }

    suspenderMatricula(){
        this._WARNING('suspenderMatricula(statusMatricula)')
    }

    afastarAluno(){
        this._WARNING('afastarAluno(statusMatricula)')
    }

    terminarCurso(){
        this._WARNING('terminarCurso(statusMatricula)')
    }

    jubilarAluno(){
        this._WARNING('jubilarAluno(statusMatricula)')
    }

    _WARNING(fName = 'unknown method') {
        console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
    }
}