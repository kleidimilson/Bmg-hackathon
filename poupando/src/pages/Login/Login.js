import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import '../dashboard/Dashboard';
import './Login.css'


function Login() {
    
  return (
    <>
        <div className="home">
            <div className="form">
              <form>
                <img src={logo} width="200px" alt="logo" />
                <input type="email" placeholder="Digite seu email"/>
                <input type="password" placeholder="Digite sua senha"/>
                <Link className="btn-entrar" to="/dashboard">Entrar</Link>
              </form>
            </div>
        </div>

    </>
  );
}

export default Login;