import React, { useState } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import CollectionDisplayCard from "./CollectionDisplayCard";

function CollectionFilter(props) {
  const [filter, setFilter] = useState("");
  const {collection} = props.collection;

  return (
    <Container>
      <Row>
        <Col>
          <Input
            type="text"
            name="filter"
            id="filter"
            placeholder="Type to filter by artist, title, label or date"
            style={{ margin: "5vh 1vw" }}
            onChange={e => setFilter(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        {collection === null ? (
          <h1>loading</h1>
        ) : (
          collection
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
              <CollectionDisplayCard key={`card-${index}`} item={item} index={index} />
            ))
        )}
      </Row>
    </Container>
  );
}


export default CollectionFilter;
