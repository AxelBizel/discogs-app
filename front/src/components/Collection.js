import React, { useState, useEffect } from "react";
import CollectionDisplay from "./CollectionDisplay";
import CollectionFilter from "./CollectionFilter";
import CollectionSort from "./CollectionSort";
import CollectionLoader from "./CollectionLoader";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getReleases } from "../actions";

function Collection({ collection, sortBy, filterBy, dispatch, cardsPerPage }) {
  const [progressBar, setProgressBar] = useState(false);

  useEffect(() => {
    dispatch(getReleases());
    if (cardsPerPage) {
      setProgressBar(true);
    }
    // if (collection.length < cardsPerPage) {
    //   setProgressBar(false);
    // }
  }, [dispatch, collection]);

  return (
    <div id="Collection">
      <Container>
        {/* <Row>
        <Col>
        <CollectionCounter collection={collection} />
        </Col>
      </Row> */}
        {progressBar ? (
          <Row style={{ paddingTop: "5vh" }}>
            <Col>
              <CollectionLoader collection={collection} />
            </Col>
          </Row>
        ) : (
          <Row style={{ padding: "5vh 0" }}>
            <Col xs="12" md="9">
              <CollectionFilter />
            </Col>
            <Col xs="12" md="3">
              <CollectionSort />
            </Col>
          </Row>
        )}

        <Row>
          <CollectionDisplay
            collection={collection}
            sortBy={sortBy}
            filterBy={filterBy}
          />
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
