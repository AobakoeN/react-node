// src/pages/MovieDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchMovieDetails } from '../utils/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Duration = styled.p`
  margin-bottom: 1rem;
`;

const Trailer = styled.iframe`
  width: 560px;
  height: 315px;
  border: none;
  border-radius: 10px;
`;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(id);
      setMovie(movieDetails);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Duration>Duration: {movie.runtime} minutes</Duration>
      <Trailer
        src={`https://www.youtube.com/embed/${movie.trailer_key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Trailer>
    </Container>
  );
}

export default MovieDetails;
