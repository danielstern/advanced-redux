import React from 'react'

import { connect } from 'react-redux'

import {
    ChannelList
} from './ChannelList';

import {
    setActiveChannel
} from './../../actions/setActiveChannel'

const mapStateToProps = (state) => ({
    channels:state.get(`channels`),
    activeChannel: state.get(`activeChannel`)
});

const mapDispatchToProps = (dispatch) => ({
    setActiveChannel:(channel)=>{
        dispatch(setActiveChannel(channel));
    }
});

export const ChannelListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelList);