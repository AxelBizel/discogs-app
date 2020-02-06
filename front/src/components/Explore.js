import React from "react";
import Header from "./Header";
import Navigation from "./Navigation.js";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

function Explore(props) {
  return (
    <div className="App">
      <Container>
        <Header />
        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>
        <Row>
            <h1>Explore</h1>
        </Row>
      </Container>
    </div>
  );
}

export default Explore;
