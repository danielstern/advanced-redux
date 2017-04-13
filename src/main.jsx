import React from 'react';
import reactDOM from 'react-dom'
import {getStore} from './getStore';
import { App } from './App';

const store = getStore();

const Main = ()=>(
        <App/>
);

const render = (store)=>{
        reactDOM.render(
            <div>
                <Main state={store.getState()}/>
            </div>,
            document.getElementById('AppContainer'));
};

render(store);