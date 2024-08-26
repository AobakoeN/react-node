// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { SidebarContainer, SidebarItem } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem><a href="/">Dashboard</a></SidebarItem>
      <SidebarItem><a href="/profile">Profile</a></SidebarItem>
      <SidebarItem><a href="/settings">Settings</a></SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
