// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: #444;
  color: #fff;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Portable CiNema</h2>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/favorites">Favorites</SidebarLink>
      <SidebarLink to="/wishlist">Wishlist</SidebarLink>
      <SidebarLink to="/newreleases">New Releases</SidebarLink>
      <SidebarLink to="/watched">Watched</SidebarLink>
      <SidebarLink to="/movies">Movies</SidebarLink>
      <SidebarLink to="/signin">Sign In</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
