// src/pages/Rates/Rates.jsx
import React from 'react';
import { RatesContainer, RatesHeader, RatesList, RateItem } from './Rates.styled';

const Rates = () => {
  return (
    <RatesContainer>
      <RatesHeader>Advertising Rates</RatesHeader>
      <RatesList>
        <RateItem>
          <label>Social Media Post:</label>
          <span>$50 per post</span>
        </RateItem>
        <RateItem>
          <label>Sponsored Video:</label>
          <span>$200 per video</span>
        </RateItem>
        <RateItem>
          <label>Billboard Advertisement:</label>
          <span>$1000 per month</span>
        </RateItem>
        <RateItem>
          <label>Webpage Advertisement:</label>
          <span>$500 per month</span>
        </RateItem>
        <RateItem>
          <label>Product Placement:</label>
          <span>$300 per product</span>
        </RateItem>
      </RatesList>
    </RatesContainer>
  );
};

export default Rates;
