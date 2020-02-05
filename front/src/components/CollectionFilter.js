import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "reactstrap";
import { filterReleases } from "../actions";
import { connect } from "react-redux";

function CollectionFilter(props) {
  const [filter, setFilter] = useState("");
  const { filterReleases } = props;

  useEffect(() => {
    filterReleases(filter);
  }, [filter]);

  return (
    <Input
      type="text"
      name="filter"
      id="filter"
      placeholder="Type to filter by artist, title, label or date"
      style={{ margin: "5vh 1vw" }}
      onChange={e => setFilter(e.target.value)}
    />
  );
}

function mdtp(dispatch) {
  return {
    filterReleases: filter => {
      dispatch(filterReleases(filter));
    }
  };
}

export default connect(null, mdtp)(CollectionFilter);
