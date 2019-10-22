import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './Pages/Home/App';
import Home from './Pages/Home/HomeLogado';
import HomeAdm from './Pages/Home/HomeAdm';
import Cadastrar from './Pages/Cadastrar/Cadastrar'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import DashboardFilmes from './Pages/Dashboard/DashboardFilmes'

import { Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import {ParseJwt} from './services/auth'

import * as serviceWorker from './serviceWorker';

const PermissaoComum = ({component: Component}) =>(
    <Route
    render={
        props =>
            ParseJwt().Permissao === "Usuario" ? (
                <Component {...props} />
            ) : (
                <HomeAdm {...props }/>
            )
        
    }
    
    
    />
);


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route  path='/Cadastrar' component={Cadastrar}/>
                <Route  path='/login' component={Login} />
                <Route path ='/dashboard' component={Dashboard}/>
                <Route path ='/dashboardfilme' component={DashboardFilmes}/>

                
                <PermissaoComum  path='/Home' component={Home} />

               
                    
                
              

            </Switch>
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
