// src/components/Header/Header.jsx
import React from 'react';
import { HeaderContainer, Logo, NavLinks } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MyApp</Logo>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
