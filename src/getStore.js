import {
    createStore
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

initializeDB();

// debugger;
// const u = users;
const currentUser = users[0];
const defaultState = fromJS(getDefaultState(currentUser));
const reducer = state=>state;
const store = createStore(reducer,defaultState);

// console.log(store.getState());
console.log(store.getState().toJS());
export const getStore = ()=>store;
