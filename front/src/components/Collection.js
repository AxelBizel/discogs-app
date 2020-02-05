import React from "react";
import CollectionCounter from "./CollectionCounter";
import CollectionDisplay from "./CollectionDisplay";
import CollectionFilter from "./CollectionFilter";
import CollectionSort from "./CollectionSort";
import { Container, Row, Col } from "reactstrap";

function Collection(props) {
  const { collection, sortBy, filterBy } = props;
  console.log("props Collection", collection, sortBy, filterBy);
  return (
    <Container>
      <Row>
        <Col>
        <CollectionCounter collection={collection} />
        </Col>
      </Row>
      <Row style={{ margin: "5vh 0" }}>
        <Col xs='12' md='8'>
          <CollectionFilter collection={collection} />
        </Col>
        <Col xs='12' md='4'>
          <CollectionSort collection={collection} />
        </Col>
      </Row>
      <Row>
        <CollectionDisplay
          collection={collection}
          sortBy={sortBy}
          filterBy={filterBy}
        />
      </Row>
    </Container>
  );
}

export default Collection;
