import React from "react";
import Header from "./Header";
import Navigation from "./Navigation.js";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import "../App.css";

function Dashboard(props) {
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
            <h1>Dashboard</h1>
        </Row>
      </Container>
    </div>
  );
}

function mstp(state) {
    console.log("App mstp", state);
    return {
      collection: state.collection
    };
  }

export default connect(mstp) (Dashboard);
