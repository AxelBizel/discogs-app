import React, { useState, useEffect } from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
} from "reactstrap";

function CollectionDisplayCard(props) {
  const { item, index } = props;
  const [delay, setDelay] = useState(0);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(min-width: 992px)").matches) {
      setDelay((index % 6) * 100);
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      setDelay((index % 4) * 100);
    } else {
      setDelay((index % 3) * 100);
    }
  }, [index]);

  return (
    <>
      <Col
        xs="6"
        sm="3"
        lg="2"
        key={index}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay={delay}
        style={{ margin: 0, padding: 0 }}
        onMouseEnter={() => setFocused(index)}
        onMouseLeave={() => setFocused(null)}
      >
        <Card
          style={{
            margin: 0,
            padding: 0,
            aspectRatio: 1,
            width: "100%",
          }}
        >
          <CardImg
            src={`${item.cover_image}`}
            alt="Card image cap"
            style={{
              margin: 0,
              aspectRatio: 1,
              backgroundSize: "cover",
              width: "100%",
            }}
          />
          <CardImgOverlay
            style={{
              margin: 0,
              padding: 0,
              aspectRatio: 1,
              backgroundSize: "cover",
              width: "100%",
            }}
          >
            <CardBody
              style={{
                margin: 0,
                padding: 10,
                height: "100%",
                background: "rgb(255,255,255, 0.8)",
                display: focused === index ? "block" : "none",
              }}
            >
              <CardTitle style={{ fontWeight: "bold" }}>
                {item.artists.map((artist) => `${artist.name} `)}
              </CardTitle>
              <CardSubtitle>{item.title}</CardSubtitle>
              <CardText style={{ fontStyle: "italic", fontSize: "0.8em" }}>
                Label(s): {item.labels.map((label) => `${label.name} `)}{" "}
                <br></br>
                Année : {item.year} <br></br>
                Format(s) : {item.formats.map((format) => `${format.name} `)}
              </CardText>
            </CardBody>
          </CardImgOverlay>
        </Card>
      </Col>
    </>
  );
}

export default CollectionDisplayCard;
