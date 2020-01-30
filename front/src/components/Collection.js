import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import logoDiscogs from "../logoDiscogs.svg";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }

  componentDidMount() {
    this.setState({ collection: this.props.collection });
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      filter: event.target.value
    });
  };

  render() {
    const { collection } = this.props;
    const { filter } = this.state;

    return (
      <Container>
        <Row>
          <Col style={{ margin: "5vh 1vw" }}>
            <h1 style={{ textAlign: "center" }}>
              Your{" "}
              <img src={logoDiscogs} alt="Discogs " style={{ width: "40px" }} />{" "}
              Collection
            </h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4 style={{ textAlign: "center" }}>
              You got{" "}
              {collection.length === 0 ? 0 : collection.collection.length}{" "}
              releases in your collection.
            </h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <Input
              type="text"
              name="filter"
              id="filter"
              placeholder="Type to filter by artist, title, label or date"
              style={{ margin: "5vh 1vw" }}
              onChange={this.handleChange}
            />
          </Col>
        </Row>

        <Row>
          {collection.length === 0 ? (
            <h1>loading</h1>
          ) : (
            collection.collection
              .filter(item => {
                const regex = new RegExp(filter, "i");
                return regex.test(
                  item.title +
                    item.artists.map(a => a.name).join("") +
                    item.labels.map(l => l.name).join("") +
                    item.formats.map(f => f.name).join("") +
                    item.year
                );
              })
              .map((item, index) => (
                <Col xs="12" sm="6" lg="3" key={index}>
                  <Card style={{ margin: "1vh 1vw" }}>
                    <CardImg
                      top
                      width="100%"
                      src={`${item.cover_image}`}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle
                        style={{ marginBottom: "0.5rem", fontWeight: "bold" }}
                      >
                        {item.artists.map(artist => `${artist.name} `)}
                      </CardTitle>
                      <CardSubtitle>{item.title}</CardSubtitle>
                      <CardText
                        style={{ fontStyle: "italic", fontSize: "0.8em" }}
                      >
                        Label(s): {item.labels.map(label => `${label.name} `)}{" "}
                        <br></br>
                        Année : {item.year} <br></br>
                        Format(s) :{" "}
                        {item.formats.map(format => `${format.name} `)}
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))
          )}
        </Row>
      </Container>
    );
  }
}

function mstp(state) {
  console.log(state.collection);
  return { collection: state.collection, filter: state.filter };
}

export default connect(mstp)(Collection);
