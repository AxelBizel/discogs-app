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

export const getYears = () => {
  return dispatch => {
    axios.get("http://localhost:5000/api/years/").then(res => {
      dispatch({
        type: "GET_YEARS",
        payload: res.data
      });
    });
  };
};

export const getYearsAdded = () => {
  return dispatch => {
    axios.get("http://localhost:5000/api/yearsAdded/").then(res => {
      dispatch({
        type: "GET_YEARSADDED",
        payload: res.data
      });
    });
  };
};


export const getGenres = () => {
  return dispatch => {
    axios.get("http://localhost:5000/api/genres/").then(res => {
      dispatch({
        type: "GET_GENRES",
        payload: res.data
      });
    });
  };
};

export const getStyles = () => {
  return dispatch => {
    axios.get("http://localhost:5000/api/styles/").then(res => {
      dispatch({
        type: "GET_STYLES",
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

export const filterReleases = filterBy => {
  console.log("action filter by", filterBy);
  return {
    type: "FILTER_COLLECTION",
    payload: filterBy
  };
};


export const isLoggedIn = loggedIn => {
  return {
    type: "RESET_LOGGED_IN",
    payload: !loggedIn
  };
}
