import axios from "axios";

export const getReleases = () => {
  return dispatch => {
    axios.get("http://localhost:5000/api/collection/").then(res => {
      dispatch({
        type: "GET_COLLECTION",
        payload: res.data
      });
    });
  };
};

export const sortReleases = sortBy => {
  console.log("action sort by", sortBy);
  return {
    type: "SORT_COLLECTION",
    payload: sortBy
  };
};


// export const sortReleases = (sortBy) => {
//   console.log("action sort by", sortBy);
//   return dispatch => {
//     dispatch({
//       type: "SORT_COLLECTION",
//       payload: sortBy
//     });
//   };
// };
