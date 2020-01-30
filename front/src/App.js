import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Collection from "./components/Collection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: null,
    };
    this.getReleases = this.getReleases.bind(this);
  }

  componentDidMount() {
    this.getReleases();
  }

  getReleases = () => {
    axios.get("http://localhost:5000/api/collection/").then(res => {
      const collection = res.data;
      this.setState({
        collection: collection
      });
      console.log(this.state);
    });
  };

  render() {
    return (
      <div className="App">
        <Collection collection={this.state.collection} />
      </div>
    );
  }
}

export default App;
