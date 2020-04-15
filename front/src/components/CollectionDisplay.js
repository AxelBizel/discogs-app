import React, { useState, useEffect, useRef } from "react";
import CollectionDisplayCard from "./CollectionDisplayCard";
import { getCardsPerPage } from "../actions";
import { connect } from "react-redux";
import Loader from "./Loader";
import elementInViewport from "../helpers";

function CollectionDisplay(props) {
  const { sortBy, filterBy, getCardsPerPage} = props
  const {collection} = props.collection
  // const [currentPage] = useState(1);
  // const [cardsPerPage, setCardsPerPage] = useState(20);
  const nextPage = useRef(null);

  // useEffect(() => {
  //   getCardsPerPage(cardsPerPage);
  //   if (collection && cardsPerPage < collection.length + 99) {
  //     setInterval(setCardsPerPage(cardsPerPage + 200), 1000);
  //   }
  // }, [cardsPerPage, getCardsPerPage, collection]);

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

  // let currentCards = null;
  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // if (collection && sortBy) {
  //   currentCards = collection
  //   .sort(collectionSort(sortBy))
  //   .slice(indexOfFirstCard, indexOfLastCard);
  // }
  
  //Load more cards when scroll down to bottom
  // if (nextPage.current &&
  //   collection &&
  //   cardsPerPage &&
  //   cardsPerPage < collection.length) {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       elementInViewport(nextPage.current)
  //     ) {
  //       setCardsPerPage(cardsPerPage + 50);
  //     }
  //   });
  // }

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
      {collection === null || sortBy === undefined ? (
        <Loader />
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
      <span ref={nextPage}></span>
    </>
  );
}

function mstp(state) {
  return {
    collection: state.collection,
    sortBy: state.sortBy,
    filterBy: state.filterBy,
    cardsPerPage: state.cardsPerPage
  };
}


function mdtp(dispatch) {
  return {
    getCardsPerPage: cardsPerPage => {
      dispatch(getCardsPerPage(cardsPerPage));
    }
  };
}

export default connect(mstp, mdtp)(CollectionDisplay);
