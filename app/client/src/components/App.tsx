import React from 'react';
import Posts from "./Posts"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../css/App.css';
import { Container, Row, Col} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row>
          <Col><Posts /></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
