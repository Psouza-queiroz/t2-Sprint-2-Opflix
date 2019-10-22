import React from 'react';
import logo from '../../assets/img/logo_opflix.png';
import dora from '../../assets/img/Filme_dora.jpg'
import eutimato from '../../assets/img/eutimato.jpg'
import '../../assets/css/home.css'
import './App.css';

import { Link } from "react-router-dom";





    function User() {
    return (
    <div className="App">
      <div className="nav">
        <ul>
          <li>Lancamentos</li>
        </ul>
    
    <img src={logo} width="100px" height="50%" />

    <div className="login">
      <ul>
        <li>Bem vindo ...</li>
        <li><Link to="/ ">Deslogar</Link></li>
      </ul>
    </div>
  </div>

  <div className="Lancamentos">
  <h2>Lancamentos</h2>
  </div>

  <div className="sessaoDaTarde">

    <button className="butao">
      direito
    </button>


    <div className="caixa">
      <a href="https://www.youtube.com/watch?v=gUTtJjV852c&t=19s">
        <img src={dora} width="100%"/>
      </a>  

    </div>
    <div className="caixa">
      <img src={eutimato} width="100%"/>

    </div>
    <div className="caixa">


    </div>

    <button className="butao">
      direito
    </button>
  </div>

  <div className="FilmesSeries">
    <h2>Filmes/Series</h2>
  </div>

  <div className="sessaoDaTarde">

    <button className="butao">
      direito
    </button>

    <div className="caixa">


    </div>
    <div className="caixa">


    </div>
    <div className="caixa">


    </div>
    <button className="butao">
      direito
    </button>
  </div>
  <div className="pequeRoda">

    <h2>Escola Senai De Informatica</h2>
    <p>senai@Informatica.com.br</p>
    <p>Endereço:  Alameda Barão de Limeira, 539 - Santa Cecilia</p>
    <p>Sistema Feito Por Pedro</p>
    
  </div>
</div>
);
}

export default User; 