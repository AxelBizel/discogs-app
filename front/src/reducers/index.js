import { combineReducers } from "redux";
import collection_reducer from "./collection_reducer";

export const initState = {
  collection:null
};

const rootReducer = combineReducers({
  collection: collection_reducer
});

export default rootReducer;
