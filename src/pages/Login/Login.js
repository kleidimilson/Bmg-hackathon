import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import '../Main/index';
import './Login.css'
import { MdKeyboardBackspace } from 'react-icons/md'


function Login() {
    
  return (
    <>
        <div className="body">
            <Link to="/" className="btn-voltar">
                <MdKeyboardBackspace/><p>voltar</p>
            </Link>
            <div className="form">
              <form>
                <img src={logo} width="200px" alt="logo" />
                <input type="email" placeholder="Digite seu email"/>
                <input type="password" placeholder="Digite sua senha"/>
                <Link className="btn-entrar" to="/dashboard">Acessar minha conta</Link>
              </form>
            </div>
        </div>

    </>
  );
}

export default Login;