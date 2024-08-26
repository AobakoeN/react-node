// src/services/authService.js
import { apiRequest } from '../utils/api';

// User login
export const login = async (email, password) => {
  return await apiRequest('auth/login', 'POST', { email, password });
};

// User registration
export const register = async (userData) => {
  return await apiRequest('auth/register', 'POST', userData);
};

// Refresh token
export const refreshToken = async () => {
  return await apiRequest('auth/refresh', 'POST');
};

// Logout
export const logout = async () => {
  localStorage.removeItem('token');
  // Optionally, you might want to notify the backend of the logout
};
