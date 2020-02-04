import { initState } from "./index";

export default function sortBy_reducer(state = initState.sortBy, action) {
  switch (action.type) {
    case "SORT_COLLECTION":
      return {
        ...state,
        sortName: action.payload
      };
    default:
      return state;
  }
}
