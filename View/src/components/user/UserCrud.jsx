import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

// const low= require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alternar e Excluir '
}

const baseUrl = 'http://localhost:3001/alunos'
const initialState = {
    user: { nome: '', ira: Number, id: Number, perfil: Number, statusMatricula: '', curso: '', disciplinas: []},
    list: []
}

export default class UserCrud extends Component {

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post' //put:edita e post:cria
        const url = user.id ? baseUrl : baseUrl
        // if(method === 'put')
        //     db.get("alunos").remove({ id: user.id }).write()
        //     db.assign({ alunos: user })
        // if(method === 'post')
        //     db.assign({ alunos: user})
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        //reinsere o usuario na primeira posição do array
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add)
            list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" 
                                name="nome"
                                value={this.state.user.nome}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>IRA</label>
                            <input type="Number" className="form-control" 
                                name="ira"
                                value={this.state.user.ira}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o IRA:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>ID</label>
                            <input type="number" className="form-control" 
                                name="id"
                                value={this.state.user.id}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o ID:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Perfil</label>
                            <input type="number" className="form-control" 
                                name="perfil"
                                value={this.state.user.perfil}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o perfil:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Status de Matrícula</label>
                            <input type="text" className="form-control" 
                                name="statusMatricula"
                                value={this.state.user.statusMatricula}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Status de Matrícula:"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Curso</label>
                            <input type="text" className="form-control" 
                                name="curso"
                                value={this.state.user.curso}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o curso:"/>
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

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
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
                        <th>Ira</th>
                        <th>Perfil</th>
                        <th>Status de Mátricula</th>
                        <th>Curso</th>
                        <th>Disciplinas Inscritas</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nome}</td>
                    <td>{user.ira}</td>
                    <td>{user.perfil}</td>
                    <td>{user.statusMatricula}</td>
                    <td>{user.curso}</td>
                    <td>{user.disciplinas}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
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