import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import duda from '../../assets/Duda.png';
import { MdKeyboardBackspace } from 'react-icons/md'
import './intelligence.css'
function intelligence() {
    return (
        <>
            <div className="intelligence">
                <Link to="/dashboard" className="btn-voltar">
                    <MdKeyboardBackspace/><p>voltar</p>
                </Link>
                <div className="appArea" >
                    <div className="cabecalho">
                        <img src={logo} width="130px" alt="logo" />
                    </div>
                    <div className="ia">
                        <div>
                            <div className="iaBox">
                                <img src={duda} width="150px" alt="duda" className="Duda"/>
                                <label className="duvida" type="text" >Olá, meu nome é Duda, e estou aqui para te ajudar!</label>
                            </div>
                            <div className="iaInferior">
                                <input className="question" type="question" placeholder="Qual a sua dúvida?"/>
                                <button className="btn-confimacao" type='button'>🎙</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default intelligence;