import React from 'react';
import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        defaultPosition='bottom'
        defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' />
    </DockMonitor>
);