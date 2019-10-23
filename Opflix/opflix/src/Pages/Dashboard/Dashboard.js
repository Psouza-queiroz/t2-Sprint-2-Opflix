import React, { Component } from 'react'
import logo from "../../assets/img/logo_opflix.png"
import '../../assets/css/dash.css'

import { Link } from "react-router-dom";
import Axios from 'axios';



export default class dashboard extends Component {
    constructor() {
        super()
        this.state = {
            lista: [],
            ListaUsuarios: [],
            nome: "",
            nomeu: "",
            email: "",
            senha: "",
            permissao: ""
        }
    }


    listarCategorias = () => {

        Axios.get("http://localhost:5000/api/categorias", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(Response => {
                this.setState({ lista: Response.data })
            })
    }
    componentDidMount() {
        this.listarCategorias();
        this.ListarUsuarios();

    }


    EstadoNome = (event) => {
        this.setState({ nome: event.target.value })
    }


    EstadoNomeUsuario = (event) => {
        this.setState({ nomeu: event.target.value })
    }
    EstadoEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    EstadoSenha = (event) => {
        this.setState({ senha: event.target.value })
    }
    Estadopermissao = (event) => {
        this.setState({ permissao: event.target.value })
    }

    CadastrarCategoria = (event) => {
        event.preventDefault()

        Axios.post("http://localhost:5000/api/categorias", {
        
            categoria: this.state.nome,
        }, {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
            })
            .then(data => {
                if (data.status === 200) {
                    console.log('nao tenho certeza se foi')
                } else {
                    console.log('ero')
                }
            })
    }
    ListarUsuarios = () => {
        Axios.get("http://localhost:5000/api/usuarios", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(Response => {
                this.setState({ ListaUsuarios: Response.data })
            })
    }
    CadastrarUsuario = (event) => {

        event.preventDefault();

        Axios.post("http://localhost:5000/api/usuarios", {
            nome: this.state.nomeu,
            email: this.state.email,
            senha: this.state.senha,
            permissao: this.state.permissao
        })
            .then(data => {
                if (data.status === 200) {
                    console.log('cadastrou')
                } else {
                    console.log('ero')
                }
            })

    }







    render() {
        return (
            <div className="App">
                <div className="imagem">
                    <Link to="/home"><img src={logo} width="100px" /></Link>
                </div>
                <div className="naosei">

                    <div className="tabela" >
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Categoria</th>
                                </tr>
                            </thead>
                            <tbody >
                                {this.state.lista.map(element => {
                                    return (
                                        <tr key={element.idCategoria}>
                                            <td>{element.idCategoria}</td>
                                            <td>{element.categoria}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <form onSubmit={this.CadastrarCategoria}>
                            <h4>Cadastrar Categoria</h4>
                            <input type="text"
                                value={this.state.nome}
                                onChange={this.EstadoNome}
                            />
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>

                    <div>

                        <form onSubmit={this.CadastrarUsuario}>
                            <h4>Cadastrar usuario</h4>
                            <input type="text"      placeholder="Nome"      value={this.state.nomeu}        onChange={this.EstadoNomeUsuario} />
                            <input type="text"      placeholder="email"     value={this.state.email}        onChange={this.EstadoEmail} />
                            <input type="password"  placeholder="senha"     value={this.state.senha}        onChange={this.EstadoSenha} />
                            <input type="text"      placeholder="permissao" value={this.state.permissao}    onChange={this.Estadopermissao} />




                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                    <div className="tabela" >
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>usuario</th>
                                    <th>email</th>
                                    <th>permissao</th>
                                </tr>
                            </thead>
                            <tbody >
                                {this.state.ListaUsuarios.map(element => {
                                    return (
                                        <tr key={element.idUsuarios}>
                                            <td>{element.idUsuario}</td>
                                            <td>{element.nome}</td>
                                            <td>{element.email}</td>
                                            <td>{element.permissao}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>



            </div>
        )
    }
}




