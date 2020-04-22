import React, { useState, useEffect } from "react";
import CollectionDisplay from "./CollectionDisplay";
import CollectionFilter from "./CollectionFilter";
import CollectionSort from "./CollectionSort";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getReleases } from "../actions";

function Collection({ collection, sortBy, filterBy, dispatch, cardsPerPage }) {
  useEffect(() => {
    dispatch(getReleases());
  }, [dispatch]);

  return (
    <div id="Collection">
      <Container>
      

        <Row style={{ padding: "5vh 0" }}>
          <Col xs="12" md="9">
            <CollectionFilter />
          </Col>
          <Col xs="12" md="3">
            <CollectionSort />
          </Col>
        </Row>

        <Row>
          <CollectionDisplay collection={collection}  />
        </Row>
      </Container>
    </div>
  );
}

function mstp(state) {
  return {
    collection: state.collection,
    sortBy: state.sortBy,
    filterBy: state.filterBy,
    cardsPerPage: state.cardsPerPage
  };
}

export default connect(mstp)(Collection);
