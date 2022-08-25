module.exports = class IAluno {
    constructor() {
    }

    getAllDisciplinasInscritas(id){
        this._WARNING('getAllDisciplinasInscritas(id)')
    }

    _WARNING(fName = 'unknown method') {
        console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
    }
}