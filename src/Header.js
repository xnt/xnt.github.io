import React, { memo } from 'react';
import VpToon from './VpToon';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = memo(function Header(props) {
  return (
    <Jumbotron>
      <header>
        <VpToon />
        <h1>Vicente Plata</h1>
      </header>
    </Jumbotron>
  );
})

Header.propTypes = {

}

Header.displayName = 'Header';

export default Header
