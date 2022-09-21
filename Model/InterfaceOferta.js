module.exports = class IOferta {
    constructor() {
    }

    alunosDeferidos(){
        this._WARNING('alunosDeferidos()')
    }

    inscreverAlunoOferta(idAluno) {
        this._WARNING('inscreverAlunoOferta(idAluno)')
    }

    _WARNING(fName = 'unknown method') {
        console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
    }
}