import React, { useState, useEffect } from "react";
import { Progress } from "reactstrap";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

const CollectionLoader = ({collection, cardsPerPage}) => {
  // const { cardsPerPage } = props.cardsPerPage;
  // const { collection } = props.collection;
  const [percentageDisplayed, setPercentageDisplayed] = useState(5);

  useEffect(() => {
    if (collection && cardsPerPage) {
      setPercentageDisplayed(
        Math.ceil((cardsPerPage / collection.length) * 100)
      );
      console.log("%", percentageDisplayed);
    }
  }, [cardsPerPage, collection, percentageDisplayed]);

  return (
    <>
      {cardsPerPage && collection && percentageDisplayed < 100 ? (
        <Row style={{ paddingTop: "5vh" }}>
          <Col>
            <p>
              Loading collection : {cardsPerPage} / {collection.length} (
              {percentageDisplayed} %)
            </p>

            <Progress animated color="info" value={percentageDisplayed} />
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </>
  );
};

function mstp(state) {
  return {
    collection: state.collection,
    cardsPerPage: state.cardsPerPage
  };
}

export default connect(mstp)(CollectionLoader);
