import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import "../App.css";

function Loader(props) {
  return (
    <div className="App">
      <Container>
        <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Col>
            <Spinner
              type="grow"
              color="dark"
              style={{ margin: "5vh ", width: "10vw", height: "10vw" }}
            />
            <Spinner
              type="grow"
              color="dark"
              style={{ margin: "5vh ", width: "10vw", height: "10vw" }}
            />
            <Spinner
              type="grow"
              color="dark"
              style={{ margin: "5vh ", width: "10vw", height: "10vw" }}
            />
            <Spinner
              type="grow"
              color="dark"
              style={{ margin: "5vh ", width: "10vw", height: "10vw" }}
            />
            <Spinner
              type="grow"
              color="dark"
              style={{ margin: "5vh 4vw", width: "10vw", height: "10vw" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Loader;
