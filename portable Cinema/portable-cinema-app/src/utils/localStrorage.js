// src/utils/localStorage.js

const FAVORITES_KEY = 'favorites';
const WATCHLIST_KEY = 'watchlist';
const WATCHED_KEY = 'watched';

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (movie) => {
  const favorites = getFavorites();
  if (!favorites.find((fav) => fav.id === movie.id)) {
    favorites.push(movie);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFavorite = (movieId) => {
  let favorites = getFavorites();
  favorites = favorites.filter((movie) => movie.id !== movieId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const getWatchlist = () => {
  const watchlist = localStorage.getItem(WATCHLIST_KEY);
  return watchlist ? JSON.parse(watchlist) : [];
};

export const addToWatchlist = (movie) => {
  const watchlist = getWatchlist();
  if (!watchlist.find((watch) => watch.id === movie.id)) {
    watchlist.push(movie);
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  }
};

export const removeFromWatchlist = (movieId) => {
  let watchlist = getWatchlist();
  watchlist = watchlist.filter((movie) => movie.id !== movieId);
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
};

export const getWatched = () => {
  const watched = localStorage.getItem(WATCHED_KEY);
  return watched ? JSON.parse(watched) : [];
};

export const addWatched = (movie) => {
  const watched = getWatched();
  if (!watched.find((watch) => watch.id === movie.id)) {
    watched.push(movie);
    localStorage.setItem(WATCHED_KEY, JSON.stringify(watched));
  }
};

export const removeWatched = (movieId) => {
  let watched = getWatched();
  watched = watched.filter((movie) => movie.id !== movieId);
  localStorage.setItem(WATCHED_KEY, JSON.stringify(watched));
};
