const IOferta= require("../Model/InterfaceOferta")
const FactoryOferta= require("../Model/FactoryOferta")

module.exports = class Controller {
    //funcionalidades da classe Oferta
    FOferta = new FactoryOferta
    IOferta = new IOferta
    
    criaOferta(disciplina, professor, vagas, periodo, perfil, alunos) {
        return this.FOferta.criaOferta(disciplina, professor, vagas, periodo, perfil, alunos)
    }
    
    alunosDeferidos(){
        return this.IOferta.alunosDeferidos()
    }
}