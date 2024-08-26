// src/utils/helpers.js

// Generate a random unique ID
export const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  // Capitalize the first letter of a string
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  