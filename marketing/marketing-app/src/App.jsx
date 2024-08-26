// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import UserProfile from './pages/Profile/UserProfile';
import CompanyProfile from './pages/Profile/CompanyProfile';
import AdList from './pages/Ads/AdList';
import AdDetails from './pages/Ads/AdDetails';
import Chat from './pages/Chat/Chat';
import Payment from './pages/Payment/Payment';
import Rates from './pages/Rates/Rates';
import OtherMarketing from './pages/OtherMarketing/OtherMarketing';
import Settings from './pages/Settings/Settings';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/profile/company" component={CompanyProfile} />
        <Route path="/ads" exact component={AdList} />
        <Route path="/ads/:id" component={AdDetails} />
        <Route path="/chat" component={Chat} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/rates" component={Rates} />
        <Route path="/other-marketing" component={OtherMarketing} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;
