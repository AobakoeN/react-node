// src/pages/NewReleases.jsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { fetchNewReleases } from '../utils/api';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    const getNewReleases = async () => {
      const releases = await fetchNewReleases();
      setNewReleases(releases);
    };

    getNewReleases();
  }, []);

  return (
    <div>
      <h1>New Releases</h1>
      <Container>
        {newReleases.length > 0 ? (
          newReleases.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No new releases available.</p>
        )}
      </Container>
    </div>
  );
};

export default NewReleases;
