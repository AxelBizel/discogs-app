import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Collection from "./components/Collection";
import { connect } from "react-redux";
import { getReleases } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: null,
      nbDisques: null
    };
  }

  componentDidMount() {
    this.props.dispatch(getReleases());
  }

  // getReleases = () => {
  //   axios.get("http://localhost:5000/api/collection/").then(res => {
  //     const collection = res.data;
  //     this.setState({
  //       collection: collection, nbDisques:collection.length
  //     });
  //     console.log(this.state);
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Collection collection={this.props.collection}/>
      </div>
    );
  }
}

export default connect()(App);
