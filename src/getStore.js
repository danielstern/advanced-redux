import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import {
    fromJS
} from 'immutable';

import {
    users,
} from './../server/db';

import {
    getDefaultState,
} from './../server/getDefaultState';

import {
    initializeDB
} from './../server/db/initializeDB'

import { createSocketMiddleware} from './socketMiddleware';

import {
    RECEIVE_MESSAGE
} from './actions'

const io = window.io;

const socketMiddleware = createSocketMiddleware(io)({
    NEW_MESSAGE:(data)=>({
        type:RECEIVE_MESSAGE,
        message:data
    })
});

import { createLogger } from 'redux-logger'

initializeDB();

import { reducer } from './reducers';
const logger = createLogger({
    stateTransformer:state=>state.toJS()
});

const enhancer = compose(
    applyMiddleware(
        socketMiddleware,
        logger
    )
);

const currentUser = users[0];
const defaultState = fromJS(getDefaultState(currentUser));
const store = createStore(reducer,defaultState,enhancer);

// console.log(store.getState());
// console.log(store.getState().toJS());
export const getStore = ()=>store;