import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getReleases } from "./actions";
import Header from "./components/Header";
import Collection from "./components/Collection";

function App(props) {
  const { dispatch, collection, sortBy, filterBy } = props;

  useEffect(() => {
    dispatch(getReleases());
  }, []);

  console.log("props App", collection, sortBy);
  return (
    <div className="App">
      <Header />

      {collection === null ? (
        <h1>Loading</h1>
      ) : (
        <Collection
          collection={collection}
          sortBy={sortBy}
          filterBy={filterBy}
        />
      )}
    </div>
  );
}

function mstp(state) {
  console.log("App mstp", state);
  return {
    collection: state.collection,
    sortBy: state.sortBy,
    filterBy: state.filterBy
  };
}

export default connect(mstp)(App);
