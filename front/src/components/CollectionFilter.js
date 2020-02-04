import React, { useState } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import { connect } from "react-redux";
import CollectionDisplayCard from "./CollectionDisplayCard";

function CollectionFilter(props) {
  const [filter, setFilter] = useState("");
  const collection = props.collection

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
              <CollectionDisplayCard key={index} item={item} index={index} />
            ))
        )}
      </Row>
    </Container>
  );
}

function mstp(state) {
  console.log(state.collection);
  return { collection: state.collection, filter: state.filter };
}

export default connect(mstp)(CollectionFilter);
