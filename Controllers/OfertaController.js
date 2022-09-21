const IOferta= require("../Model/InterfaceOferta")
const FactoryOferta= require("../Model/FactoryOferta")

module.exports = class Controller {
    //funcionalidades da classe Oferta
    FOferta = new FactoryOferta
    IOferta = new IOferta
    
    criaOferta(disciplina, id, professor, vagas, periodo, perfil) {
        return this.FOferta.criaOferta(disciplina, professor, vagas, periodo, perfil)
    }

    inscreverAlunoOferta(idAluno) {
        return this.IOferta.inscreverAlunoOferta(idAluno)
    }
    
    alunosDeferidos(){
        return this.IOferta.alunosDeferidos()
    }
}