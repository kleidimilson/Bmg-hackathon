import React from 'react';
import {
  FiMessageCircle,
  FiArrowUpCircle,
  FiArrowDownCircle,
} from 'react-icons/fi';
import { FaWallet } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <NavLink to="/">
        <FiMessageCircle size="32" />
      </NavLink>
      <header>
        <div>
          <h3>Bem vindo, Usuário</h3>
          <div className="wallet">
            <FaWallet size="32" />
            <span>R$ 2.500</span>
          </div>
        </div>
      </header>
      <div className="balance">
        <span>Hoje</span>
        <ul>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$500,00</span>
          </li>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$50,00</span>
          </li>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$50,00</span>
          </li>
          <li className="negative">
            <FiArrowDownCircle size="24" />
            <span>- R$50,00</span>
          </li>
          <li className="negative">
            <FiArrowDownCircle size="24" />
            <span>- R$50,00</span>
          </li>
        </ul>
      </div>

      <div className="balance">
        <span>Ontem</span>
        <ul>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$50,00</span>
          </li>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$50,00</span>
          </li>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$50,00</span>
          </li>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$50,00</span>
          </li>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$50,00</span>
          </li>
          <li>
            <FiArrowUpCircle size="24" />
            <span>R$1750,00</span>
          </li>
        </ul>
      </div>
    </Container>
  )
}
