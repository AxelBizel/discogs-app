import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getReleases } from "./actions";
import Collection from "./components/Collection";
import Header from "./components/Header";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getReleases());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Collection collection={this.props.collection} /> 
      </div>
    );
  }
}

export default connect()(App);
