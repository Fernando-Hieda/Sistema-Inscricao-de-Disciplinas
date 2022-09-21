module.exports = class IAluno {
    constructor() {
    }

    newOferta(disciplina, id, professor, vagas, periodo, perfil) {
        this._WARNING('newOferta(disciplina, professor, vagas, periodo, perfil)')
    }

    inscreverOfertaDisciplina(idOferta) {
        this._WARNING('inscreverOfertaDisciplina(idOferta)')
    }
    
    getAllDisciplinasInscritas(id){
        this._WARNING('getAllDisciplinasInscritas(id)')
    }


    _WARNING(fName = 'unknown method') {
        console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
    }
}