import React from "react";
import { Row, Col, Container } from "reactstrap";
import logoDiscogs from "../logoDiscogs.svg";

function Header() {
  return (
    <Container>
      <Row>
        <Col style={{ margin: "5vh 1vw" }}>
          <h1 style={{ textAlign: "center" }}>
            Your{" "}
            <img src={logoDiscogs} alt="Discogs " style={{ width: "40px" }} />{" "}
            Collection
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
