import { combineReducers } from "redux";
import UserReducer from "./user-reducer";


const allReducers = combineReducers({
  user: UserReducer
});