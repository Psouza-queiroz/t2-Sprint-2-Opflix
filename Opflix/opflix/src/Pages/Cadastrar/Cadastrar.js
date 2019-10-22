import React, { Component } from 'react'
import logo from "../../assets/img/logo_opflix.png"
import '../../assets/css/Login.css'
import { Link } from "react-router-dom";
import Axios from 'axios';

class Cadastrar extends Component {
  constructor() {
    super()
    this.state = {
      nome:  "",
      email: "",
      senha: "",
      erro: ""
    }
  }

  EstadoEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  EstadoSenha = (event) => {
    this.setState({ senha: event.target.value })
  }
  EstadoNome = (event) =>{
    this.setState({nome: event.target.value})
}
  CadastrarUsuario= (event) => {
    event.preventDefault();
    console.log("Deveria estar indo")
    Axios.post("http://localhost:5000/api/usuarios", {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha

    })

      .then(data => {
        if (data.status === 200) {
          console.log('deveria estar indo');
          this.props.history.push('/login');
        } else {
          console.log('erro')
        }
      })
      .catch(erro =>  {
        this.setState({erro: "digite um nome ou email valido"})
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

              <form onSubmit={this.CadastrarUsuario}>
                <h3>Nome</h3>
                <input type="text"
                  value={this.state.nome}
                  onChange={this.EstadoNome}

                />
                <br />
                <h3>Email:</h3>
                <input type="text"
                  value={this.state.email} 
                  onChange={this.EstadoEmail}
                  />

                <br />
                <h3>Senha:</h3>
                <input type="password"
                  value={this.state.senha}
                  onChange={this.EstadoSenha}
                  />

                <br />
                <button id="btn" type="submit" >Cadastrar</button>

                <p 
                                className="text__login"
                                style={{color: "red", textAlign:"center"}}
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

export default Cadastrar;