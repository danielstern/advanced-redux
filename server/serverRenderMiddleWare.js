import { createStore } from 'redux';
import { reducer } from './../src/reducers';
import {Provider} from 'react-redux';
import { App } from './../src/App'
import { renderToString } from 'react-dom/server'
import React from 'react';
import template from 'lodash/template';

import fs from 'fs';

const readModuleFile = (path, callback)=>{
    try {
        const filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}

export const handleRender = (getState) => (req, res)=>{
    let defaultState = getState();
    const store = createStore(reducer,defaultState);

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const preloadedState = store.getState().toJS();

    readModuleFile('./../public/index.html', (err, index)=>{
        const templated = template(index)({
            html,
            preloadedState:JSON.stringify(preloadedState).replace(/</g, '\\u003c')
        });
        res.send(templated);
    });
};