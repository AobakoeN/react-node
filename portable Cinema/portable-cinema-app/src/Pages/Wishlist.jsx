// src/pages/Wishlist.jsx
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { getWatchlist } from '../utils/localStrorage';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

function Wishlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const watchlist = getWatchlist();
    setWatchlist(watchlist);
  }, []);

  return (
    <div>
      <h1>Wishlist</h1>
      <Container>
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies in wishlist.</p>
        )}
      </Container>
    </div>
  );
}

export default Wishlist;
