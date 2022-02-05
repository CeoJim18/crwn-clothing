import {createStore, applyMiddleware} from 'redux';

import {persistStore} from 'redux-persist'//redux persist breng je eerst hierin. 
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//setup middle ware

const middlewares=[logger];//array hier is er zodat je makkelijker waardes kan adden enzo

//making stored

export const store= createStore(rootReducer,applyMiddleware(...middlewares));//...middlewares (logger) methods worden gegeven aan applyMiddleware

export const persistor=persistStore(store);//persisted version van store

//opzoeken deze syntax bij default
