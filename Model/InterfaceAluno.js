module.exports = class IAluno {
    constructor() {
    }

    inscreverOfertaDisciplina(id) {
        this._WARNING('inscreverOfertaDisciplina(id)')
    }
    
    getAllDisciplinasInscritas(id){
        this._WARNING('getAllDisciplinasInscritas(id)')
    }


    _WARNING(fName = 'unknown method') {
        console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
    }
}