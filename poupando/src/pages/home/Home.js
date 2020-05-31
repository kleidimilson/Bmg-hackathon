import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import './home.css'
import '../Login/Login';


function Home() {
    
  return (
    <>
        <div className="home">
            <div className="form">
              <form>
                  <img src={logo} width="200px" alt="logo" />
                  <Link className="btn-entrar" to="/login" >Entrar</Link>
                  <Link className="btn-cadastrar" to="/cadastro" >Cadastre-se</Link>
              </form>
            </div>
        </div>

    </>
  );
}

export default Home;