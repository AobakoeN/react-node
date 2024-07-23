// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Wishlist from './Pages/Wishlist';
import NewReleases from './Pages/NewReleases';
import Watched from './Pages/Watched';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const MainContent = styled.div`
  margin-left: 220px; /* Width of the sidebar */
  padding: 2rem;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Sidebar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/new-releases" element={<NewReleases />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
