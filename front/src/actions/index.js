import axios from 'axios';

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
