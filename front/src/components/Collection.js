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
  CardSubtitle
} from "reactstrap";

class Collection extends Component {
  render() {
    const { collection } = this.props;
    return (
      <Container>
        <Row>
          <h1 style={{ textAlign: "center" }}>My Collection</h1>
        </Row>
        <Row>
          {collection === null ? (
            <h1>loading</h1>
          ) : (
            collection.map((item, index) => (
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
                      {item.artists.map(
                        artist => `${artist.name} `
                      )}
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

export default Collection;
