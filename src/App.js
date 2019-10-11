import React from 'react';
import Buttons from './Buttons';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Parallax } from 'react-parallax';
import bg from './img/bg.jpg';
import './App.css';

function App() {
  // fa init
  library.add(fab);

  return (
    <Parallax
      bgImage={bg}
      bgImageStyle={{opacity: '.8'}}
      blur={5}
      strength={600}
      >
      <div className="App">
        <div>
          <Header />
          <Welcome />
          <Buttons />
          <Footer />
        </div>
      </div>
      </Parallax>
  );
}

export default App;
