// src/components/Sidebar/Sidebar.styled.js
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #f4f4f4;
  padding: 1rem;
  height: 100vh;
`;

export const SidebarItem = styled.div`
  margin: 1rem 0;

  a {
    text-decoration: none;
    color: #333;
  }

  a:hover {
    text-decoration: underline;
  }
`;
