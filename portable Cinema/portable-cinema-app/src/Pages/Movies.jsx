// src/pages/Movies.jsx
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';
import { fetchMovies } from '../utils/api';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <Container>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </Container>
    </div>
  );
}

export default Movies;
