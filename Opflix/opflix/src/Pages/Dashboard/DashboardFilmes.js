import React, { Component } from 'react'
import logo from "../../assets/img/logo_opflix.png"
import '../../assets/css/dashfilmes.css'

import { Link } from "react-router-dom";
import Axios from 'axios';
import { elementType } from 'prop-types';



export default class dashboard extends Component {
    constructor() {
        super()
        this.state = {
            listaCategoria:[],
            listaTipos:[],
            listaClassificacao:[],
            
            lista: [],
            nome: "",
            sinopse: "",
            duracaoMin: "",
            dataDeLancamento: "",
            Categoria: "",
            Tipo: "",
            classificacao: "",
            Classificacao1: ""

        }
    }
    EstadoNome = (event) => {
        this.setState({ nome: event.target.value })
    }
    Estadosinopse = (event) => {
        this.setState({ sinopse: event.target.value })
    }
    EstadoduracaoMin = (event) => {
        this.setState({ duracaoMin: event.target.value })
    }
    EstadodataDeLancamento = (event) => {
        this.setState({ dataDeLancamento: event.target.value })

    }
    EstadoCategoria = (event) => {
        this.setState({ Categoria: event.target.value })
    }
    EstadTipos = (event) => {
        this.setState({ Tipo: event.target.value })
    }
    EstadoClassificacao = (event) => {
        this.setState({ Classificacao1: event.target.value })
    }
    EstadoTipo = (event) => {
        this.setState({ Tipo: event.target.value })
    }
    


    listarLancamentos = () => {

        Axios.get("http://localhost:5000/api/Lancamentos", {
        })
            .then(Response => {
                this.setState({ lista: Response.data })
            })
    }

    listarTipos = () => {

        Axios.get("http://localhost:5000/api/Tipos", {
        })
            .then(Response => {
                this.setState({ listaTipos: Response.data })
            })
    }   

    listarClassificacao = () => {

        Axios.get("http://localhost:5000/api/Classificacao", {
        })
            .then(Response => {
                this.setState({ listaClassificacao: Response.data })
            })
    }   

    listarCategorias = () => {

        Axios.get("http://localhost:5000/api/categorias", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(Response => {
                this.setState({ listaCategoria: Response.data })
            })
    }

    componentDidMount() {
        this.listarLancamentos();
        this.listarCategorias();
        this.listarTipos();
        this.listarClassificacao();
    }

    CadastrarLancamento = (event) => {
        event.preventDefault();
        console.log('chegou')
        Axios.post("http://localhost:5000/api/Lancamentos", {
            nome: this.state.nome,
            sinopse: this.state.sinopse,
            duracaoMin: Number(this.state.duracaoMin),
            DataDeLancamento: (this.state.dataDeLancamento),
            idCategoria: Number(this.state.Categoria),
            idTipo: Number(this.state.Tipo),
            idClassificacao: Number(this.state.Classificacao1),
        }, {

                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') },

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
                <div className="naosei2">

                    <div className="tabela" >
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>sinopse</th>
                                    <th>duraçao min</th>
                                    <th>Data Lancamento</th>
                                    <th>categoria</th>
                                    <th>tipo</th>
                                    <th>Classificacao</th>
                                </tr>
                            </thead>
                            <tbody >
                                {this.state.lista.map(element => {
                                    return (
                                        <tr key={element.idLancamento}>
                                            <td>{element.idLancamento}</td>
                                            <td>{element.nome}</td>
                                            <td>{element.sinopse}</td>
                                            <td>{element.duracaoMin}</td>
                                            <td>{element.dataDeLancamento}</td>
                                            <td>{element.idCategoriaNavigation === undefined ? 'Null' : element.idCategoriaNavigation.categoria}</td>
                                            <td>{element.idTipoNavigation === undefined ? 'Null' : element.idTipoNavigation.tipo}</td>
                                            <td>{element.idClassificacaoNavigation === undefined ? 'Null' : element.idClassificacaoNavigation.classificacao1}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div>
                            <form onSubmit={this.CadastrarLancamento}>
                                <h4>Cadastrar Lancamento</h4>
                                <input type="text"
                                    placeholder="Nome"
                                    value={this.state.nome}
                                    onChange={this.EstadoNome} />
                                <input type="text"
                                    placeholder="Sinopse"
                                    value={this.state.sinopse}
                                    onChange={this.Estadosinopse} />
                                <input type="number"
                                    placeholder="Duraçao"
                                    value={this.state.duracaoMin}
                                    onChange={this.EstadoduracaoMin} />
                                <input type="text"
                                    placeholder="aaaa-mm-dd"
                                    value={this.state.dataDeLancamento}
                                    onChange={this.EstadodataDeLancamento} 
                                    />
                               <select name="Categoria" onChange={this.EstadoCategoria}  >
                                   <option selected disabled value="0">Selecione A categoria</option>
                                   {
                                       this.state.listaCategoria.map(element =>  
                                        {
                                            return(<option value={element.idCategoria}>{element.categoria}</option>)
                                        })
                                   }
                               </select>
                               <select name="Tipos" onChange={this.Estadotipo}  >
                                   <option selected disabled value="0">Selecione o Tipos</option>
                                   {
                                       this.state.listaTipos.map(element =>  
                                        {
                                            return(<option value={element.idtipo}>{element.tipo}</option>)
                                        })
                                   }
                               </select>
                               <select name="Classificacao" onChange={this.EstadoClassificacao}  >
                                   <option selected disabled value="0">Selecione A Classificacao</option>
                                   {
                                       this.state.listaClassificacao.map(element =>  
                                        {
                                            return(<option value={element.idClassificacao}>{element.classificacao1}</option>)
                                        })
                                   }
                               </select>

                                <button type="submit">Cadastrar</button>
                            </form>
                        </div>
                    </div>




                </div>



            </div>
        )
    }
}




