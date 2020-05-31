import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import '../dashboard/Dashboard';
import './Cadastro.css'


function Cadastro() {
    
  return (
    <>
        <div className="home">
            <div className="form">
              <form>
                <img src={logo} width="200px" alt="logo" />
                <input type="email" placeholder="Digite seu email"/>
                <input type="password" placeholder="Digite sua senha"/>
                <input type="password" placeholder="Repita sua senha"/> 
                <Link className="btn-entrar" to="/dashboard">Cadastrar</Link>
              </form>
            </div>
        </div>

    </>
  );
}

export default Cadastro;