// src/pages/Home/Home.styled.js
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const WelcomeMessage = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  font-size: 1.25rem;
  margin: 1rem 0;
`;
