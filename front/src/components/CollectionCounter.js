import React from "react";
import { Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";

function CollectionCounter(props) {
  const collection = props.collection;

  return (
    <Container>
      <Row>
        <Col>
          <h4 style={{ textAlign: "center" }}>
            You got {collection.length === 0 ? 0 : collection.collection.length}{" "}
            releases in your collection.
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

function mstp(state) {
  console.log(state.collection);
  return { collection: state.collection, filter: state.filter };
}

export default connect(mstp)(CollectionCounter);
