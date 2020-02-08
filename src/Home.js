import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import Buttons from './Buttons';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';

export default memo(function Home() {
  return (
    <Container>
        <Buttons />
        <Header />
        <Welcome />
        <Footer />
    </Container>
  )
});