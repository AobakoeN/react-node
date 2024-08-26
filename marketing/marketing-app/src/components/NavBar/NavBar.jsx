// src/components/Navbar/Navbar.jsx
import React from 'react';
import { NavbarContainer, NavbarItem } from './Navbar.styled';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarItem><a href="/">Home</a></NavbarItem>
      <NavbarItem><a href="/ads">Ads</a></NavbarItem>
      <NavbarItem><a href="/chat">Chat</a></NavbarItem>
      <NavbarItem><a href="/settings">Settings</a></NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
