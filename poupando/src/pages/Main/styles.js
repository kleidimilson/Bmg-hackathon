import styled from 'styled-components';

import TechBackground from '../../assets/tech.jpg';

export const Container = styled.div`
  background: #fff;
  color: #222;
  background: #fff;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 1rem;

  > a {
    color: #fff;
    display: flex;
    background: #242062;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border-radius: 50%;
  }

  header {
    background: #241f62;
    background-size: 100%;
    display: flex;
    align-items: center;
    padding: 3rem 1rem;
    position: relative;
    margin-bottom: 1rem;

    > div {
      z-index: 1;
      color: #fff;
    }

    h3 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
    }

    .wallet {
      display: flex;
      align-items: center;
      font-size: 32px;

      svg {
        margin-right: 8px;
      }
    }
  }

  
  .balance {
    margin: 0 16px 16px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:last-child {
      margin-bottom: 0;
    }

    > span {
      padding: 8px 16px;
      background: #f16622;
      color: #fff;
      display: block;
      font-size: 18px;
      text-transform: uppercase;
      color: #fff;
      font-weight: 600;
    }

    ul {
      list-style: none;
      padding: 1rem;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 8px;
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: bold;

      svg {
        color: #242062;
      }

      &.negative svg {
        color: red;
      }
    }

    li:last-child {
      margin-bottom: 0;
      border-bottom: 0;
    }
  }
`;
