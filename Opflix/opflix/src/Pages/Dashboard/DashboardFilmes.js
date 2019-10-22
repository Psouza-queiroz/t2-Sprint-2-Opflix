import React, { Component } from 'react'
import logo from "../../assets/img/logo_opflix.png"
import '../../assets/css/dashfilmes.css'

import { Link } from "react-router-dom";
import Axios from 'axios';



export default class dashboard extends Component {
    constructor() {
        super()
        this.state = {
            lista: [],
            nome:"",
            sinopse:"",
            duracaoMin:"",
            dataDeLancamento:"",
            Categoria:"",
            Tipo:"",
            Classificacao1:"",
            
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
    EstadoTipo = (event) => {
        this.setState({ Tipo: event.target.value })
    }
    EstadoClassificacao1 = (event) => {
        this.setState({ Classificacao1: event.target.value })
        console.log(this.state)
    }


    listarLancamentos = () => {

        Axios.get("http://localhost:5000/api/Lancamentos", {
        })
            .then(Response => {
                this.setState({ lista: Response.data })
            })
        }

        componentDidMount(){
            this.listarLancamentos();
        }

        CadastrarLancamento = (event) =>{
            event.preventDefault();
            console.log('chegou')
            Axios.post("http://localhost:5000/api/Lancamentos", {
                nome:this.state.nome,
                sinopse:this.state.sinopse,
                duracaoMin:Number(this.state.duracaoMin),
                iddataDeLancamento:(this.state.duracaoMin),
                idCategoria:Number(this.state.Categoria),
                idTipo:Number(this.state.Tipo),
                idClassificacao:Number(this.state.Classificacao1),
            },{
                
                headers: { 'Authorization' : 'Bearer ' + localStorage.getItem('usuario-opflix') },
         
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
                                            <td>{element.idCategoriaNavigation === undefined ? 'Null' :  element.idCategoriaNavigation.categoria}</td>
                                            <td>{element.idTipoNavigation === undefined ? 'Null' :  element.idTipoNavigation.tipo}</td>
                                            <td>{element.idClassificacaoNavigation === undefined ? 'Null' : element.idClassificacaoNavigation.classificacao1}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div>
                        <form onSubmit={this.CadastrarLancamento}>
                            <h4>Cadastrar Lancamento</h4>
                            <input type="text"      placeholder="Nome"       value={this.state.nome}              onChange={this.EstadoNome}/>
                            <input type="text"      placeholder="Sinopse"      value={this.state.sinopse}           onChange={this.Estadosinopse}/>
                            <input type="number"    placeholder="Duraçao"      value={this.state.duracaoMin}        onChange={this.EstadoduracaoMin}/>
                            <input type="text"      placeholder="data"          value={this.state.dataDeLancamento}  onChange={this.EstadodataDeLancamento}/>
                            <input type="text"      placeholder="Categoria"      value={this.state.Categoria}         onChange={this.EstadoCategoria}/>
                            <input type="text"      placeholder="Tipo"          value={this.state.Tipo}              onChange={this.EstadoTipo}/>
                            <input type="text"      placeholder="Classificaco"      value={this.state.Classificacao1}    onChange={this.EstadoClassificacao1}/>
                            
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                    </div>
                   

        

                </div>



            </div>
        )
    }
}




