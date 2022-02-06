import {createStore, applyMiddleware} from 'redux';

import {persistStore} from 'redux-persist'//redux persist breng je eerst hierin. 
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//setup middle ware

const middlewares=[];//array hier is er zodat je makkelijker waardes kan adden enzo
//LOGGER zorgt ervoor dat alle actions en hun consequenties worden geconsole logged
//making stored

// de onderstaande code is er om ervoor te zorgen dat onze logger alleen actief wordt als we in development zijn

if (process.env.NODE_ENV==='development') //je wilt het alleen in development
{
middlewares.push(logger);
}

//env is environment variable

export const store= createStore(rootReducer,applyMiddleware(...middlewares));//...middlewares (logger) methods worden gegeven aan applyMiddleware

export const persistor=persistStore(store);//persisted version van store

//opzoeken deze syntax bij default

//Bij yarn build---> NODE_ENV is production...bij yarn start is het development.
