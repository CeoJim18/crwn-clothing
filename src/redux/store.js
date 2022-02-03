import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//setup middle ware

const middlewares=[logger];//array hier is er zodat je makkelijker waardes kan adden enzo

//making stored

const store= createStore(rootReducer,applyMiddleware(...middlewares));//...middlewares (logger) methods worden gegeven aan applyMiddleware

export default store;
