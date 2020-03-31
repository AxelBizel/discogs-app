import React, { useState, useEffect } from "react";
import { Progress } from "reactstrap";
import { connect } from "react-redux";
import { getReleases, getCardsPerPage } from "../actions";
import Collection from "./Collection";

const CollectionLoader = props => {
  const { cardsPerPage } = props.cardsPerPage;
  const { collection } = props.collection;
  const [percentageDisplayed, setPercentageDisplayed] = useState(0);

  useEffect(() => {
    if (collection && cardsPerPage) {
        let progressBar = (cardsPerPage / collection.length)
      setPercentageDisplayed(progressBar* 100);
      console.log("%", percentageDisplayed);
    }
  }, [cardsPerPage, collection, percentageDisplayed]);

  return (
    <div>
      {percentageDisplayed <= 100? (
        <Progress animated color="info" value={percentageDisplayed} />
      ) : (
        <></>
      )}
    </div>
  );
};

function mstp(state) {
  return {
    collection: state.collection,
    cardsPerPage: state.cardsPerPage
  };
}

export default connect(mstp)(CollectionLoader);
