import { combineReducers } from "redux";
import reducer_filter from "./reducer_filter.js";

export const initState = {
  collection:{collection:''},
  filter: []
};

const rootReducer = combineReducers({
  collection: reducer_filter,
  filter: reducer_filter
});

export default rootReducer;
