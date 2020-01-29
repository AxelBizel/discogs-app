import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.getReleases = this.getReleases.bind(this);
  }

  componentDidMount() {
    this.getReleases();
  }

  getReleases = () => {
    axios
      .get("https://api.discogs.com/iktor/collection/folders/0")
      .then(response => response.data)
      .then(release => {
        this.setState({
          data: release
        });
      });
      console.log(this.state)
  };

  render() {
    return (
      <div className="App">
        {this.state.data===null ? <h1>loading</h1> : this.state.data}
      </div>
    );
  }
}

export default App;
