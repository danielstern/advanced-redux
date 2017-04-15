import {
    createStore,
    applyMiddleware
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

import { createLogger } from 'redux-logger'

initializeDB();

import { reducer } from './reducers';

const currentUser = users[0];
const defaultState = fromJS(getDefaultState(currentUser));
const store = createStore(reducer,defaultState,applyMiddleware(createLogger({
    stateTransformer:state=>state.toJS()
})));

// console.log(store.getState());
console.log(store.getState().toJS());
export const getStore = ()=>store;