// src/pages/Watched.jsx
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { getWatched } from '../utils/localStrorage';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

function Watched() {
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const watchedMovies = getWatched();
    setWatched(watchedMovies);
  }, []);

  return (
    <div>
      <h1>Watched</h1>
      <Container>
        {watched.length > 0 ? (
          watched.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No watched movies.</p>
        )}
      </Container>
    </div>
  );
}

export default Watched;
