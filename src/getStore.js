import {
    createStore
} from 'redux';

const store = createStore(
    a=>a,
);

export const getStore = ()=>store;
