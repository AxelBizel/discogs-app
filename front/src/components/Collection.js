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
import axios from "axios";



class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:null
    };
    this.getImages = this.getImages.bind(this);
  }


 
  getImages = (id) => {
    axios.get(`http://localhost:5000/api/image/${id}`).then(res => {
      const img = res.data;
      this.setState({
        img: img
      });
      console.log('img', this.state);
    });
  };

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
                <Col xs="6" md="3" key={index}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={`${item.basic_information.cover_image}`}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{item.basic_information.artists[0].name}</CardTitle>
                      <CardSubtitle>{item.basic_information.title}</CardSubtitle>
                      <CardText>
                        Label: {item.basic_information.labels[0].name} <br></br> 
                        Année : {item.basic_information.year} <br></br>
                        Format : {item.basic_information.formats[0].name}
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
