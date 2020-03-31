import React, { useState, useEffect, useRef } from "react";
import CollectionDisplayCard from "./CollectionDisplayCard";
import { getCardsPerPage } from "../actions";
import { connect } from "react-redux";
import Loader from "./Loader";
import elementInViewport from "../helpers";
import CollectionLoader from "./CollectionLoader";

function CollectionDisplay(props) {
  const { collection } = props.collection;
  const { sortBy } = props.sortBy;
  const { filterBy } = props.filterBy;
  const [currentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const previousPage = useRef(null);
  const nextPage = useRef(null);
  const { getCardsPerPage } = props;


  useEffect(() => {
    getCardsPerPage(cardsPerPage);
    if (collection && cardsPerPage <= collection.length + 99) {
      setInterval(setCardsPerPage(cardsPerPage + 100), 100);
    }
  }, [cardsPerPage, getCardsPerPage, collection]);

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

  //Load more cards when scroll down to bottom
  let currentCards = null;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  if (collection && sortBy) {
    currentCards = collection
      .sort(collectionSort(sortBy))
      .slice(indexOfFirstCard, indexOfLastCard);
  }

  if (nextPage.current) {
    window.addEventListener("scroll", () => {
      if (
        elementInViewport(nextPage.current) &&
        collection &&
        cardsPerPage < collection.length
      ) {
        setCardsPerPage(cardsPerPage + 50);
      }
    });
  }

  //

  // if (previousPage.current && currentPage > 1) {
  //   window.addEventListener("scroll", () => {
  //     if (elementInViewport(nextPage.current)) {
  //       setCurrentPage(currentPage-1);
  //     }
  //   });
  // }

  return (
    <>
      <span ref={previousPage}></span>
      {currentCards === null || sortBy === undefined ? (
        <Loader />
      ) : (
        currentCards
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
      <span ref={nextPage}></span>
    </>
  );
}
function mdtp(dispatch) {
  return {
    getCardsPerPage: cardsPerPage => {
      dispatch(getCardsPerPage(cardsPerPage));
    }
  };
}

export default connect(null, mdtp)(CollectionDisplay);
