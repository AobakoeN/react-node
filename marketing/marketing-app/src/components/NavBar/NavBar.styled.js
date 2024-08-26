// src/components/Navbar/Navbar.styled.js
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #f4f4f4;
  padding: 1rem;
`;

export const NavbarItem = styled.div`
  a {
    text-decoration: none;
    color: #333;
  }
  a:hover {
    text-decoration: underline;
  }
`;
