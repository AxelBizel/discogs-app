import React, { useState, useEffect, useRef } from "react";
import CollectionDisplayCard from "./CollectionDisplayCard";
import CollectionLoader from "./CollectionLoader";
import { connect } from "react-redux";
import Loader from "./Loader";
import elementInViewport from "../helpers";

function CollectionDisplay(props) {
  const { collection } = props.collection;
  const { filterBy } = props.filterBy;
  const { sortBy } = props.sortBy;
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(48);
  const [cardsToDisplay, setCardsToDisplay] = useState(null);

  const nextPage = useRef(null);
  const previousPage = useRef(null);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // useEffect(() => {
  //   if (collection && cardsPerPage < collection.length + 49) {
  //     setInterval(setCardsPerPage(cardsPerPage + 50), 200);
  //     console.log(cardsPerPage)
  //   }
  // }, [cardsPerPage, getCardsPerPage, collection]);

  const collectionSort = (property) => {
    switch (property) {
      case "Artist (asc)":
        return function (a, b) {
          return a["artists"][0]["name"].localeCompare(b["artists"][0]["name"]);
        };
      case "Artist (desc)":
        return function (a, b) {
          return b["artists"][0]["name"].localeCompare(a["artists"][0]["name"]);
        };
      case "Title (asc)":
        return function (a, b) {
          return a["title"].localeCompare(b["title"]);
        };
      case "Title (desc)":
        return function (a, b) {
          return b["title"].localeCompare(a["title"]);
        };
      case "Year (asc)":
        return function (a, b) {
          return a["year"].toString().localeCompare(b["year"]).toString();
        };
      case "Year (desc)":
        return function (a, b) {
          return b["year"].toString().localeCompare(a["year"]).toString();
        };
      default:
        break;
    }
  };

  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // if (collection && sortBy) {
  //   currentCards = collection
  //     .sort(collectionSort(sortBy))
  //     .slice(indexOfFirstCard, indexOfLastCard);
  // }

  // Load more cards when scroll down to bottom
  // if (
  //   nextPage.current &&
  //   collection &&
  //   cardsPerPage &&
  //   cardsPerPage < collection.length
  // ) {
  //   window.addEventListener("scroll", () => {
  //     if (elementInViewport(nextPage.current)) {
  //       setCardsPerPage(cardsPerPage + 50);
  //       setCurrentPage(currentPage++);
  //     }
  //   });
  // }

  useEffect(() => {
    if (collection && sortBy) {
      let currentCards = collection.sort(collectionSort(sortBy)).slice(0, 24);
      setCardsToDisplay(currentCards);
    }
  }, [collection && sortBy]);

  useEffect(() => {
    if (
      cardsPerPage &&
      sortBy &&
      collection &&
      cardsPerPage < collection.length
    ) {
      window.addEventListener("scroll", () => {
        if (elementInViewport(nextPage.current)) {
          if (cardsPerPage + 49 < collection.length) {
            setCardsPerPage(cardsPerPage + 48);
          } else {
            setCardsPerPage(collection.length);
          }
        }
      });
      console.log("cardsPerPage", cardsPerPage);

      let currentCards = collection
        .sort(collectionSort(sortBy))
        .slice(0, cardsPerPage);
      setCardsToDisplay(currentCards);
    }
  }, [cardsPerPage, collection, currentPage, sortBy]);

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
      {/* {collection && cardsPerPage && cardsPerPage < collection.length ? (
        <CollectionLoader
          cardsPerPage={cardsPerPage}
          number={collection.length}
        />
      ) : (
        <></>
      )} */}
      {/* <span ref={previousPage}></span> */}
      {currentPage > 1 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          PREVIOUS
        </button>
      )}
      {!collection || !sortBy || !cardsToDisplay ? (
        <Loader />
      ) : (
        cardsToDisplay
          .sort(collectionSort(sortBy))
          .filter((item) => {
            const regex = new RegExp(filterBy, "i");
            return regex.test(
              item.title +
                item.artists.map((a) => a.name).join("") +
                item.labels.map((l) => l.name).join("") +
                item.formats.map((f) => f.name).join("") +
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
      <span style={{ margin: "2vh" }} ref={nextPage}></span>
      {/* {cardsPerPage && collection && cardsPerPage < collection.length && (
        <Row>
          <button onClick={() => setCardsPerPage(cardsPerPage + 48)}>
            Show More
          </button>
        </Row>
      )} */}
    </>
  );
}

function mstp(state) {
  return {
    collection: state.collection,
    sortBy: state.sortBy,
    filterBy: state.filterBy,
  };
}

// function mdtp(dispatch) {
//   return {
//     getCardsPerPage: (cardsPerPage) => {
//       dispatch(getCardsPerPage(cardsPerPage));
//     },
//   };
// }

export default connect(mstp)(CollectionDisplay);
