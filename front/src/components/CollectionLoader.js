import React from "react";
import { Progress } from "reactstrap";

const CollectionLoader = (number) => {
  return (
    <div>
      <Progress animated color="info" value={number} />
    </div>
  );
};

export default CollectionLoader;
