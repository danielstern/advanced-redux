import {
    createStore
} from 'redux';

import {
    fromJS
} from 'immutable';

import {
    getDefaultState
} from './../server/getDefaultState';

const defaultState = fromJS(getDefaultState());
const reducer = state=>state;
const store = createStore(
    a=>a,
);

export const getStore = ()=>store;
