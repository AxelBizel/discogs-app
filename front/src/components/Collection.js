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
import logoDiscogs from "../logoDiscogs.svg";

class Collection extends Component {
  render() {
    const { collection } = this.props;
    return (
      <div className="App">
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
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="/assets/318x180.svg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{item.artists[0].name}</CardTitle>
                      <CardSubtitle>{item.title}</CardSubtitle>
                      <CardText>
                        Label: {item.labels[0].name} / Année : {item.year} /
                        Format : {item.formats[0].name}
                        <br></br>
                        {/* <a href={item.resource_url} target='_blank' rel="noopener noreferrer">
                          See more on <img src={logoDiscogs} style={{height:'30px'}}alt="logo Discogs" />
                        </a> */}
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Collection;
