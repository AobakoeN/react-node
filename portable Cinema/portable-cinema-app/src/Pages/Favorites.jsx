// src/pages/Favorites.jsx
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { getFavorites } from '../utils/localStrorage';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = getFavorites();
    setFavorites(favorites);
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      <Container>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No favorite movies.</p>
        )}
      </Container>
    </div>
  );
}

export default Favorites;
