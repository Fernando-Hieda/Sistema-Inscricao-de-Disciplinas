import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'oferta',
    title: 'Ofertas',
    subtitle: 'Cadastro de ofertas: Incluir, Listar, Alternar e Excluir '
}

const baseUrl = 'http://localhost:3001/ofertas'
const initialState = {
    oferta: { disciplina: '', id: Number,professor: '', vagas: Number, periodo: '', perfil: '', alunos: []},
    list: []
}

export default class OfertaCrud extends Component {

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ oferta: initialState.oferta })
    }

    save() {
        const oferta = this.state.oferta
        const method = oferta.id ? 'put' : 'post' //put:edita e post:cria
        const url = oferta.id ? `${baseUrl}/${oferta.id}` : baseUrl
        axios[method](url, oferta)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ oferta: initialState.oferta, list })
            })
    }

    getUpdatedList(oferta, add = true) {
        //reinsere o usuario na primeira posição do array
        const list = this.state.list.filter(u => u.id !== oferta.id)
        if(add)
            list.unshift(oferta)
        return list
    }

    updateField(event) {
        const oferta = { ...this.state.oferta }
        oferta[event.target.nome] = event.target.value
        this.setState({ oferta })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome Disciplina</label>
                            <input type="text" className="form-control" 
                                name="disciplina"
                                value={this.state.oferta.disciplina}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome da disciplina:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>ID</label>
                            <input type="number" className="form-control" 
                                name="id"
                                value={this.state.oferta.id}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o ID:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Professor</label>
                            <input type="text" className="form-control" 
                                name="professor"
                                value={this.state.oferta.professor}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Professor:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Vagas</label>
                            <input type="number" className="form-control" 
                                name="vagas"
                                value={this.state.oferta.vagas}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o número de Vagas:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Periodo</label>
                            <input type="text" className="form-control" 
                                name="statusMatricula"
                                value={this.state.oferta.periodo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Periodo:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>perfil</label>
                            <input type="text" className="form-control" 
                                name="perfil"
                                value={this.state.oferta.perfil}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o perfil:"/>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e =>this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Limpar campos
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(oferta) {
        this.setState({ oferta })
    }

    remove(oferta) {
        axios.delete(`${baseUrl}/${oferta.id}`).then(resp => {
            const list = this.getUpdatedList(oferta, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Disciplina</th>
                        <th>Professor</th>
                        <th>Vagas</th>
                        <th>Perfil</th>
                        <th>Periodo</th>
                        <th>Alunos Inscritos</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(oferta => {
            return (
                <tr key={oferta.id}>
                    <td>{oferta.id}</td>
                    <td>{oferta.disciplina}</td>
                    <td>{oferta.professor}</td>
                    <td>{oferta.vagas}</td>
                    <td>{oferta.perfil}</td>
                    <td>{oferta.periodo}</td>
                    <td>{oferta.statusMatricula}</td>
                    <td>{oferta.alunos}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(oferta)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(oferta)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}