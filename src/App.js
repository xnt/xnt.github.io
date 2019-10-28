import React from 'react';
import Buttons from './Buttons';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // fa init
  library.add(fab);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/db">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <div>
        <Buttons />
        <Header />
        <Welcome />
        <Footer />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default App;
