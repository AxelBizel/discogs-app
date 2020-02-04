import { combineReducers } from "redux";
import collection_reducer from "./collection_reducer";
import sortBy_reducer from "./sortBy_reducer";

export const initState = {
  collection: null,
  sortBy: { sortName: "" }
};

const rootReducer = combineReducers({
  collection: collection_reducer,
  sortBy: sortBy_reducer
});

export default rootReducer;
