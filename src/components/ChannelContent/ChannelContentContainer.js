import React from 'react'
import { connect } from 'react-redux'

import {
    ChannelContent
} from './ChannelContent';

const mapStateToProps = (state) => {
    const channels = state.get(`channels`);
    const activeChannel = state.get(`activeChannel`);
    const channel = channels.find(channel => channel.get(`id`) === activeChannel);

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