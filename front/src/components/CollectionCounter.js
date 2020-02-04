import React from "react";
import { Row, Col, Container } from "reactstrap";

function CollectionCounter(props) {
  const {collection} = props.collection;

  return (
    <Container>
      <Row>
        <Col>
          <h4 style={{ textAlign: "center" }}>
            You got {collection === null ? 0 : collection.length}{" "}
            releases in your collection.
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default CollectionCounter;
