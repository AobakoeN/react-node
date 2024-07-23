// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Portable CiNema</h1>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="/newreleases">New Releases</NavLink>
        <NavLink to="/watched">Watched</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
