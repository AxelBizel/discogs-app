import { initState } from "./index";

export default function reducer_filter(state = initState.filter, action) {
  switch (action.type) {
    case "GET_COLLECTION":
      return { ...state,  collection:action.payload };
    case "FILTER_VALUE":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
