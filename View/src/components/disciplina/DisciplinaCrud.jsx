import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'Disciplinas',
    title: 'Disciplinas',
    subtitle: 'Cadastro de Disciplinas: Incluir, Listar, Alternar e Excluir '
}

const baseUrl = 'http://localhost:3001/disciplinas'
const initialState = {
    disciplina: { nome: '', id: '', perfil: '', vagas: '', cursos: [], alunos: []},
    list: []
}

export default class DisciplinaCrud extends Component {

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ disciplina: initialState.disciplina })
    }

    save() {
        const disciplina = this.state.disciplina
        const method = disciplina.id ? 'put' : 'post' //put:edita e post:cria
        const url = disciplina.id ? `${baseUrl}/${disciplina.id}` : baseUrl
        axios[method](url, disciplina)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ disciplina: initialState.disciplina, list })
            })
    }

    getUpdatedList(disciplina, add = true) {
        //reinsere o usuario na primeira posição do array
        const list = this.state.list.filter(u => u.id !== disciplina.id)
        if(add)
            list.unshift(disciplina)
        return list
    }

    updateField(event) {
        const disciplina = { ...this.state.disciplina }
        disciplina[event.target.nome] = event.target.value
        this.setState({ disciplina })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" 
                                name="name"
                                value={this.state.disciplina.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Id</label>
                            <input type="text" className="form-control" 
                                name="id"
                                value={this.state.disciplina.id}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o id:"/>
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

    load(disciplina) {
        this.setState({ disciplina })
    }

    remove(disciplina) {
        axios.delete(`${baseUrl}/${disciplina.id}`).then(resp => {
            const list = this.getUpdatedList(disciplina, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Perfil</th>
                        <th>Vagas</th>
                        <th>Cursos</th>
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
        return this.state.list.map(disciplina => {
            return (
                <tr key={disciplina.id}>
                    <td>{disciplina.id}</td>
                    <td>{disciplina.nome}</td>
                    <td>{disciplina.perfil}</td>
                    <td>{disciplina.vagas}</td>
                    <td>{disciplina.cursos}</td>
                    <td>{disciplina.alunos}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(disciplina)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(disciplina)}>
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