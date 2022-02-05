//heeft alle states van onze app. alle reduces gaan hierin..
//user reducer--> sotred state van current user

import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage'//om storage te importen van redux persist (doe je in root reducer dus)
//de line bovent betekend basically dat je local storage wilt 
//sessionStorage kan je ook doen

import userReducer from "./user/user.reducer";

import cartReducer from "./cart/cart.reducer";

import directoryReducer from "./directory/directory.reducer";

import shopReducer from "./shop/shop.reducer.jsx";

const persistConfig={
  key: 'root',//vanaf root wil je storen
  storage,
  whitelist: ['cart']// die state die je wilt storen als string. in dit geval wil je alleen cart want user wordt al door firebase gehandeld
}

const rootReducer=combineReducers({
  user: userReducer,
  cart:cartReducer,
  directory:directoryReducer,//return hiervan is return van directoryreducer which is the state getting returned by it
  shop:shopReducer
});
export default persistReducer(persistConfig,rootReducer);//root reducer heeft nu persistence props

//dit is je state

