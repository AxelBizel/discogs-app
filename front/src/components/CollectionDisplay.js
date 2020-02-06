import React from "react";
import CollectionDisplayCard from "./CollectionDisplayCard";
import { filterReleases } from "../actions";
import { connect } from "react-redux";
import Loader from "./Loader";

function CollectionDisplay(props) {
  const { collection } = props.collection;
  const { sortBy } = props.sortBy;
  const { filterBy } = props.filterBy;

  const collectionSort = property => {
    switch (property) {
      case "Artist (asc)":
        return function(a, b) {
          return a["artists"][0]["name"].localeCompare(b["artists"][0]["name"]);
        };
      case "Artist (desc)":
        return function(a, b) {
          return b["artists"][0]["name"].localeCompare(a["artists"][0]["name"]);
        };
      case "Title (asc)":
        return function(a, b) {
          return a["title"].localeCompare(b["title"]);
        };
      case "Title (desc)":
        return function(a, b) {
          return b["title"].localeCompare(a["title"]);
        };
      case "Year (asc)":
        return function(a, b) {
          return a["year"]
            .toString()
            .localeCompare(b["year"])
            .toString();
        };
      case "Year (desc)":
        return function(a, b) {
          return b["year"]
            .toString()
            .localeCompare(a["year"])
            .toString();
        };
      default:
        break;
    }
  };

  return (
    <>
      {collection === null || sortBy === undefined ? (
        <Loader/>
      ) : (
        collection
          .sort(collectionSort(sortBy))
          .filter(item => {
            const regex = new RegExp(filterBy, "i");
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
    </>
  );
}

function mdtp(dispatch) {
  return {
    filterReleases: filterBy => {
      dispatch(filterReleases(filterBy));
    }
  };
}

export default connect(null, mdtp)(CollectionDisplay);
