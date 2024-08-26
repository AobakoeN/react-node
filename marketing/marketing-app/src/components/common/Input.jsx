// src/components/Input/Input.jsx
import React from 'react';
import { StyledInput } from './Input.styled';

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
