import React from 'react';

import {
    ContactListContainer,
    ChannelContentContainer,
    CurrentChannelTextInputContainer,
    ChannelListContainer,
    CurrentUserContainer
} from './components';

export const App = ()=>(
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Redux Messenger</a>
                </div>
            </div>
        </nav>
        <div className="row">
            <div className="col-xs-3">
                <div>
                    <ChannelListContainer />
                </div>
            </div>
            <div className="col-xs-6">
                <div>
                    <ChannelContentContainer />
                </div>
                <div>
                    <CurrentChannelTextInputContainer />
                </div>

            </div>
            <div className="col-xs-3">
                <div>
                    <CurrentUserContainer />
                </div>
                <div>
                    <ContactListContainer />
                </div>
            </div>
        </div>
    </div>
);