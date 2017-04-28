import React from 'react';
import reactDOM from 'react-dom'
import {getStore} from './getStore';
import { App } from './App';
import { OFFLINE, updateStatus } from './actions';

import { Provider } from 'react-redux';

const store = getStore();

const Main = ({state})=>(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>

    </div>
);

const render = (store)=>{
        reactDOM.render(
            <div>
                <Main state={store.getState()}/>
            </div>,
            document.getElementById('AppContainer'));
};

render(store);

const action = updateStatus(OFFLINE);
store.dispatch(action);