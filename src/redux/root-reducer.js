//heeft alle states van onze app. alle reduces gaan hierin..
//user reducer--> sotred state van current user

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer
});
