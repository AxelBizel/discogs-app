import React, { useState, useEffect } from "react";
import { Progress } from "reactstrap";
// import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

const CollectionLoader = ({ cardsPerPage, number }) => {
  const [percentageDisplayed, setPercentageDisplayed] = useState(0);

  useEffect(() => {
    if (number && cardsPerPage) {
      setPercentageDisplayed(Math.ceil((cardsPerPage / number) * 100));
      console.log("%", percentageDisplayed);
    }
  }, [cardsPerPage, percentageDisplayed]);

  return (
    <>
      {cardsPerPage && number && percentageDisplayed < 100 ? (
        <Container>
          <Row style={{ padding: "5vh" }}>
            <Col>
              <p>
                Loading collection : {cardsPerPage} / {number} (
                {percentageDisplayed} %)
              </p>

              <Progress animated color="info" value={percentageDisplayed} />
            </Col>
          </Row>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

// function mstp(state) {
//   return {
//     collection: state.collection,
//     cardsPerPage: state.cardsPerPage
//   };
// }

export default CollectionLoader;
