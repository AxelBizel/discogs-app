import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.getReleases = this.getReleases.bind(this);
  }

  componentDidMount() {
    this.getReleases();
  }

  getReleases = () => {
    for (let i = 1; i < 10; i++) {
      axios
        .get(`https://api.discogs.com/release/{i}`)
        .then(response => response.data)
        .then(release => {
          this.setState({
            data: release
          });
        });
    }
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.getReleases}>Get releases</button>
      </div>
    );
  }
}

export default App;
