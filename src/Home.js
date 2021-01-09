import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import Buttons from './Buttons';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Parallax } from 'react-parallax';
// import bgImg from './img/vpToon.png';

export default memo(function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Buttons />
        </Col>
      </Row>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Welcome />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
});