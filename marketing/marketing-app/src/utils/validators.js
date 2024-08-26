// src/utils/validators.js

// Validate email address
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  // Validate password (minimum length 6 characters)
  export const isValidPassword = (password) => {
    return password.length >= 6;
  };
  
  // Validate required fields
  export const isRequired = (value) => {
    return value && value.trim().length > 0;
  };
  