import React, { memo } from 'react';
import VpToon from './VpToon';

const Header = memo(function Header(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <header>
        <VpToon />
        <h1>Vicente Plata</h1>
      </header>
    </div>
  );
})

Header.propTypes = {

}

export default Header

