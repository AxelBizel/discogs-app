import React, { useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation.js";
import CollectionCounter from "./CollectionCounter";
import CollectionDisplay from "./CollectionDisplay";
import CollectionFilter from "./CollectionFilter";
import CollectionSort from "./CollectionSort";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getReleases } from "../actions";

function Collection(props) {
  const { collection, sortBy, filterBy, dispatch } = props;

  useEffect(() => {
    dispatch(getReleases());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <CollectionCounter collection={collection} />
        </Col>
      </Row> */}
      <Row style={{ margin: "5vh 0" }}>
        <Col xs="12" md="9">
          <CollectionFilter />
        </Col>
        <Col xs="12" md="3">
          <CollectionSort />
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

function mstp(state) {
  return {
    collection: state.collection,
    sortBy: state.sortBy,
    filterBy: state.filterBy
  };
}
export default connect(mstp)(Collection);
