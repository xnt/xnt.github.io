import React from 'react';
import Buttons from './Buttons';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import Dashboard from "./Dashboard";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  // fa init
  library.add(fab);

  return (
    <Router basename='/'>
      <Switch>
        <Route path="/db">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
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

export default App;
