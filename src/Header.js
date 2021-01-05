import React, { memo } from 'react';
import VpToon from './VpToon';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => <h1>Vicente Plata</h1>; 
// memo(function Header(props) {
//   return (
//     {/*<Jumbotron style={{backgroundColor: "#D799221C", paddingLeft: "10px"}} fluid>
//       <header>
//   <VpToon />*/}
        
//      {/* </header>
//      </Jumbotron>*/}
//   );
// })

// Header.propTypes = {

// }

Header.displayName = 'Header';

export default Header
