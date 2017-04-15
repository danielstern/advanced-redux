import {
    createStore
} from 'redux';

const reducer = state => state;

const store = createStore(reducer);

export const getStore = ()=>store;
