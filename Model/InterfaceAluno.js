module.exports = class IAluno {
    constructor() {
    }

    newOferta(disciplina, id, professor, vagas, periodo, perfil) {
        this._WARNING('newOferta(disciplina, professor, vagas, periodo, perfil)')
    }

    inscreverOfertaDisciplina(idAluno, idOferta) {
        this._WARNING('inscreverOfertaDisciplina(idOferta)')
    }

    listarAlunos() {
        this._WARNING('listarAlunos()')
    }

    listarDisciplinasInscritas(id) {
        return this._WARNING('listarDisciplinasInscritas(id)')
    }

    listarGruposAcademicos(id) {
        return this._WARNING('listarGruposAcademicos(id)')
    }

    _WARNING(fName = 'unknown method') {
        console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
    }
}