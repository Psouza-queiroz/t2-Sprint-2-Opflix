import React, { Component } from 'react'
import logo from "../../assets/img/logo_opflix.png"
import '../../assets/css/Login.css'
import Rodape from '../../components/Rodape';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { ParseJwt } from '../../services/auth.js'


export default class Login extends Component {
  constructor() {
    super()
    this.state = {

      email: "",
      senha: "",
      erro: ""
    }
  }
  componentDidMount(){
    console.log(ParseJwt())
  }
    
  

  EstadoEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  EstadoSenha = (event) => {
    this.setState({ senha: event.target.value })
  }


  LogarUsuario = (event) => {
    event.preventDefault();
    console.log("Deveria estar indo")
    Axios.post("http://localhost:5000/api/usuarios/login", {

      email: this.state.email,
      senha: this.state.senha

    })

      .then(data => {
        if (data.status === 200) {
          console.log('deveria estar indo');
          localStorage.setItem("usuario-opflix",data.data.token)
          this.props.history.push('/Home');
        } else {
          console.log('erro')
        }

      })
      .catch(erro => {
        this.setState({ erro: "Email ou Senha invalido" })
        console.log(erro)
      })
  }


  render() {
    return (
      <div className="App">
        <div className="imagem">
          <Link to="/"><img href="" className="logo" src={logo} width="100px" /></Link>
        </div>


        <div className="meio">
          <div className="caixota">
            <div id="formi">

              <form onSubmit={this.LogarUsuario}>
                <h3>Email:</h3>
                <input type="text"
                  value={this.state.nome}
                  onChange={this.EstadoEmail}

                /> <br />
                <h3>Senha:</h3>
                <input type="password"
                  value={this.state.senha}
                  onChange={this.EstadoSenha}

                />
                <br />
                <Link to="/cadastrar"><p>Cadastrar</p></Link>

                <button id="btn" type="submit">Login</button>
                <p
                  className="text__login"
                  style={{ color: "red", textAlign: "center" }}
                >
                  {this.state.erro}
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
