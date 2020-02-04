import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getReleases } from "./actions";
import Header from "./components/Header";
import Collection from "./components/Collection";

function App(props) {

const {dispatch, collection} = props

  useEffect(() => {
    dispatch(getReleases());
  }, []);

  console.log("props App", collection);
  return (
    <div className="App">
      <Header />

      {collection === null ? (
        <h1>Loading</h1>
      ) : (
        <Collection collection={collection} />
      )}
    </div>
  );
}

function mstp(state) {
  return { collection: state.collection };
}

export default connect(mstp)(App);
