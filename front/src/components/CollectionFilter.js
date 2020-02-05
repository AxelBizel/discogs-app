import React, { useState, useEffect } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import CollectionDisplayCard from "./CollectionDisplayCard";

function CollectionFilter(props) {
  const [filter, setFilter] = useState("");
  const { collection } = props.collection;
  const { sortBy } = props.sortBy;

  console.log("props Filer Sort By", sortBy);

  const collectionSort = property => {
    switch (property) {
      case "Artist A-Z":
        return function(a, b) {
          return a["artists"][0]["name"].localeCompare(b["artists"][0]["name"]);
        };
      case "Artist Z-A":
        return function(a, b) {
          return b["artists"][0]["name"].localeCompare(a["artists"][0]["name"]);
        };

      case "title":
        return function(a, b) {
          return b["title"].localeCompare(a["title"]);
        };

      default:
        break;
    }
  };

  

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
        {collection === null || sortBy === undefined ? (
          <h1>loading</h1>
        ) : (
          collection
            .sort(collectionSort(sortBy))
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
              <CollectionDisplayCard
                key={`card-${index}`}
                item={item}
                index={index}
              />
            ))
        )}
      </Row>
    </Container>
  );
}

export default CollectionFilter;
