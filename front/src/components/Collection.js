import React from "react";
import CollectionCounter from "./CollectionCounter";
import CollectionFilter from "./CollectionFilter";

function Collection(props) {
  const collection = props.collection;

  return (
    <>
      <CollectionCounter collection={collection} />
      <CollectionFilter collection={collection} />
    </>
  );
}

export default Collection;
