// src/services/adServices.js
import { apiRequest } from '../utils/api';

// Fetch all ads
export const getAllAds = async () => {
  return await apiRequest('ads');
};

// Fetch ad by ID
export const getAdById = async (id) => {
  return await apiRequest(`ads/${id}`);
};

// Create a new ad
export const createAd = async (adData) => {
  return await apiRequest('ads', 'POST', adData);
};

// Update an ad
export const updateAd = async (id, adData) => {
  return await apiRequest(`ads/${id}`, 'PUT', adData);
};

// Delete an ad
export const deleteAd = async (id) => {
  return await apiRequest(`ads/${id}`, 'DELETE');
};
