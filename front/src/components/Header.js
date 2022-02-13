import React from "react";
import { Row, Col, Container } from "reactstrap";
import logoDiscogs from "../logoDiscogs.svg";
import Navigation from "./Navigation";

function Header() {
  return (
    <div id="Header">
      <Container
        style={{
          padding: "1vh 0",
          width: "100%",
        }}
      >
        <Row>
          <Col>
            <h1 style={{ fontSize: "1.5rem" }}>
              Discogs{" "}
              <img src={logoDiscogs} alt="Discogs " style={{ width: "30px" }} />{" "}
              Explorer
            </h1>
          </Col>
          <Col>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
