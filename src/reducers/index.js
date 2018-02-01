import {combineReducers} from 'redux';
import UserList from "./userlist-reducer";

 const allReducers = combineReducers({
    users: UserList
 });

 export default allReducers;