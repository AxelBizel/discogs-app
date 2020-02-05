import React from "react";
import CollectionCounter from "./CollectionCounter";
import CollectionFilter from "./CollectionFilter";
import CollectionSort from "./CollectionSort";

function Collection(props) {
 const {collection, sortBy} = props
 console.log('props Collection',collection, sortBy )
  return (
    <>
      <CollectionCounter collection={collection} />
      <CollectionSort collection = {collection} />
      <CollectionFilter collection={collection} sortBy={sortBy} />
    </>
  );
}

export default Collection;
