import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation.js";
import { Container, Row, Col } from "reactstrap";
import Login from "./components/Login";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
