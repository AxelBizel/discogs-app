import { combineReducers } from "redux";
import collection_reducer from "./collection_reducer";
import sortBy_reducer from "./sortBy_reducer";
import filterBy_reducer from "./filterBy_reducer";
import isLoggedIn_reducer from "./isLoggedIn_reducer";
import years_reducer from "./years_reducer";
import yearsAdded_reducer from "./yearsAdded_reducer";



export const initState = {
  collection: null,
  sortBy: { sortName: "Artist A-Z" },
  filterBy:'', 
  isLoggedIn:false,
  years:null,
  yearsAdded:null
};

const rootReducer = combineReducers({
  collection: collection_reducer,
  years:years_reducer,
  yearsAdded:yearsAdded_reducer,
  sortBy: sortBy_reducer,
  filterBy:filterBy_reducer,
  isLoggedIn:isLoggedIn_reducer
});

export default rootReducer;
