import { combineReducers, createStore } from "redux";
import houseReducer from "./house/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  //always register your reducer here
  combineReducers({
    house: houseReducer
  }),
  enhancer
);

export default store;