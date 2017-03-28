import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import { getPreloadedState } from './getPreloadedState'
import { getDebugSessionKey } from './utility'
import { DevTools } from './components/DevTools/DevTools'
import { initSagas } from './initSagas';

import {
    RECEIVE_MESSAGE,
    receiveMessage
} from './actions'

import { reducer } from './reducers';

const preloadedState = getPreloadedState();
const sagaMiddleware = createSagaMiddleware();

const io = window.io;

const createSocketMiddleware = io => config => store => next => action => {
    for (const key in config) {
        socket.on(key, config[key]);
    }
    let result = next(action);
    return result;
}

const socketMiddleware = createSocketMiddleware(io)({
    NEW_MESSAGE:(data)=>({
        type:RECEIVE_MESSAGE,
        message:data
    })
});

const socket = io();
socket.on('connect', function(){});
socket.on('NEW_MESSAGE', function(data){
    store.dispatch(receiveMessage(data));
});
socket.on('disconnect', function(){});

const enhancer = compose(
    applyMiddleware(
        sagaMiddleware,
        thunk,
        socketMiddleware
    ),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
);
const store = createStore(
    reducer,
    preloadedState,
    enhancer
);

export const getStore = ()=>store;

initSagas(sagaMiddleware);

