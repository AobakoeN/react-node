// src/pages/Home/Home.jsx
import React from 'react';
import { HomeContainer, WelcomeMessage, FeaturesList, FeatureItem } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeMessage>Welcome to the Marketing/Advertising Platform</WelcomeMessage>
      <FeaturesList>
        <FeatureItem>Connect with influencers and companies.</FeatureItem>
        <FeatureItem>Post and browse advertisement opportunities.</FeatureItem>
        <FeatureItem>Real-time chat for communication.</FeatureItem>
        <FeatureItem>Secure payment handling.</FeatureItem>
        <FeatureItem>Various advertising options including social media, billboards, and more.</FeatureItem>
      </FeaturesList>
    </HomeContainer>
  );
};

export default Home;
