import React from 'react';

import logo from '../../assets/logo.jpeg';
import './home.css'


function Home() {
    
  return (
    <>
        <div className="home">
            <div className="form">
              <form>
                <img src={logo} width="200px" alt="logo" />
                <button className="btn-entrar">Entrar</button>
                <button className="btn-cadastrar">Cadastre-se</button>
              </form>
            </div>
        </div>

    </>
  );
}

export default Home;