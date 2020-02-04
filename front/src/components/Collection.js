import React from "react";
import CollectionCounter from "./CollectionCounter";
import CollectionFilter from "./CollectionFilter";
import CollectionSort from "./CollectionSort";

function Collection(props) {
 const {collection} = props
 console.log('props Collection',collection )
  return (
    <>
      <CollectionCounter collection={collection} />
      <CollectionSort collection = {collection} />
      <CollectionFilter collection={collection} />
    </>
  );
}

export default Collection;
