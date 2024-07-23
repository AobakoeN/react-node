// src/components/MovieCard.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite, getFavorites } from '../utils/localStrorage';
import { useState, useEffect } from 'react';

const Card = styled(motion.div)`
  width: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  
  img {
    width: 100%;
    height: auto;
  }

  h3 {
    text-align: center;
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const FavoriteButton = styled.button`
  display: block;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #ff6347;
  color: white;
  cursor: pointer;
`;

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Card whileHover={{ scale: 1.1 }}>
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
      <FavoriteButton onClick={handleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </FavoriteButton>
    </Card>
  );
}

export default MovieCard;
