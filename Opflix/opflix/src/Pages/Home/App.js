import React, { Component } from 'react';
import logo from '../../assets/img/logo_opflix.png';
import '../../assets/css/home.css'
import './App.css';
import dora from "../../assets/img/Filme_dora.jpg"
import mato from "../../assets/img/eutimato.jpg"


import { Link } from "react-router-dom";
import Rodape from '../../components/Rodape';

class App extends Component {

  constructor() {
    super()

  }



  render() {
    return (
      <div className="App">
        <div className="nav">
          <ul>
            <Link to={"login"}><li>Lancamentos</li></Link>
          </ul>

          <img src={logo} width="100px" height="50%" />

          <div className="login">
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/Cadastrar">Cadastrar  </Link></li>
              {/* <li><Link to="/Homeadm">teste  </Link></li> 
        <li><Link to="/Home">teste2  </Link></li>  */}
            </ul>
            
          </div>
        </div>

        <div className="Lancamentos">
          <h2>Lancamentos</h2>
        </div>

        <div className="sessaoDaTarde">
          <div className="caixa">
            <img src={dora} width="100%" />
          </div>

          <div className="caixa">
            <img src={dora} width="100%" />
          </div>

          <div className="caixa">
            <img src={dora} width="100%" />
          </div>

        </div>
        <div className="FilmesSeries">
          <h2>Filmes/Series</h2>
        </div>

        <div className="sessaoDaTarde">
          <div className="caixa">
            <img src={dora} width="100%" />
          </div>

          <div className="caixa">
            <img src={mato} width="100%" />
          </div>

          <div className="caixa">
            <img src={mato} width="100%" />
          </div>

        </div>
        <Rodape />
      </div>
    );
  }
}

export default App; 