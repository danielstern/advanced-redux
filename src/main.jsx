import React from 'react';
import reactDOM from 'react-dom'
import {getStore} from './getStore';
import {Provider} from 'react-redux';

import { DevTools } from './components/DevTools/DevTools'
import { App } from './App';

const store = getStore();

const Main = ()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)

const render = (store)=>{
        reactDOM.render(
            <div>
                <Main state={store.getState()}/>
                <DevTools store={store}/>
            </div>,
            document.getElementById('AppContainer'));
};

render(store);