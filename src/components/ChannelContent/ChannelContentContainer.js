import React from 'react'

import { connect } from 'react-redux'

import {
    ChannelContent
} from './ChannelContent';

import {
    activeChannelSelector,
} from './../../selectors'

const mapStateToProps = (state) => {
    const channels = state.get(`channels`);
    const activeChannel = state.get(`activeChannel`);
    const channel = activeChannelSelector(state);

    return {
        messages:channel.get(`messages`),
        channelName:channel.get(`name`),
        fetchStatus:channel.get(`fetchStatus`),
        status:state.get(`currentUser`).get(`status`)
    }
};

const mapDispatchToProps = (dispatch) => ({});

export const ChannelContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelContent);