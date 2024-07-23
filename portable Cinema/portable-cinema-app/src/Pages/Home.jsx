// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../utils/api';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies('discover/movie');
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
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

export default Home;
