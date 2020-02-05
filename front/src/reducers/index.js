import { combineReducers } from "redux";
import collection_reducer from "./collection_reducer";
import sortBy_reducer from "./sortBy_reducer";
import filterBy_reducer from "./filterBy_reducer";


export const initState = {
  collection: null,
  sortBy: { sortName: "Artist A-Z" },
  filterBy:''
};

const rootReducer = combineReducers({
  collection: collection_reducer,
  sortBy: sortBy_reducer,
  filterBy:filterBy_reducer
});

export default rootReducer;
