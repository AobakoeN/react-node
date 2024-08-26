// src/components/Button/Button.jsx
import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ onClick, children, type = 'button' }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
