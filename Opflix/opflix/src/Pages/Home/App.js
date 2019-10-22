import React,{Component} from 'react';
import logo from '../../assets/img/logo_opflix.png';
import '../../assets/css/home.css'
import './App.css';


import { Link } from "react-router-dom";
import Rodape from '../../components/Rodape';

class App extends Component{

  constructor(){
    super()
    
  }
  
  
  
  render() {
    return (
    <div className="App">
      <div className="nav">
        <ul>
          <li>Lancamentos</li>
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
 <Rodape/>
</div>
);
}
}

export default App; 