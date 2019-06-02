import React from 'react';
import Buttons from './Buttons';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import './App.css';

function App() {
  // fa init
  library.add(fab);
  
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
