// src/components/Header/Header.styled.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
`;

export const NavLinks = styled.nav`
  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
