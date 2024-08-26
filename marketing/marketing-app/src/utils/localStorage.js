// src/utils/localStorage.js

// Set an item in local storage
export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Get an item from local storage
  export const getItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  // Remove an item from local storage
  export const removeItem = (key) => {
    localStorage.removeItem(key);
  };
  