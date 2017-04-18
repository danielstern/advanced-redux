import React from 'react';
import reactDOM from 'react-dom'
import {getStore} from './getStore';
import { App } from './App';
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