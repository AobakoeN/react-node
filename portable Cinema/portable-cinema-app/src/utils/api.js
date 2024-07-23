// src/utils/api.js

const API_KEY = 'your_api_key_here'; // Replace with your actual API key
const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchNewReleases = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/new-releases?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results; // Adjust according to your API response structure
  } catch (error) {
    console.error('Error fetching new releases:', error);
    return [];
  }
};

// Function to fetch movies
export const fetchMovies = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/movies?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results; // Adjust according to your API response structure
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };
  
  // Function to fetch details of a specific movie
export const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Adjust according to your API response structure
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  };
// Other API functions can go here
