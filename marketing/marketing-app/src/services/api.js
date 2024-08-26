// src/utils/api.js

// Base API URL
const API_BASE_URL = 'https://api.example.com';

// Generic API request function
export const apiRequest = async (endpoint, method = 'GET', data = null) => {
  const url = `${API_BASE_URL}/${endpoint}`;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // Example for auth token
    },
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
