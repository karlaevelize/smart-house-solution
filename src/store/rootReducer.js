import { combineReducers } from "redux";
import houseReducer from "./house/reducer"
import userReducer from "./user/reducer"

const reducer = combineReducers({
  house: houseReducer,
  user: userReducer
});

export default reducer;