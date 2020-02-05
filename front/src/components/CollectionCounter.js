import React from "react";

function CollectionCounter(props) {
  const { collection } = props.collection;

  return (
    <h4 style={{ textAlign: "center" }}>
      You got {collection === null ? 0 : collection.length} releases in your
      collection.
    </h4>
  );
}

export default CollectionCounter;
