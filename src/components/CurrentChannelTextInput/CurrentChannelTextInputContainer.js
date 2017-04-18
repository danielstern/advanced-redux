import React from 'react'

import { connect } from 'react-redux'

import {
    CurrentChannelTextInput
} from './CurrentChannelTextInput';

import {
    updateChannelInputText,
    submitChannelInputText,
} from './../../actions/';

import {
    activeChannelSelector,
    currentUserSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    const activeChannel = activeChannelSelector(state);
    return {
        activeChannel:activeChannel.get(`id`),
        text:activeChannel.get(`currentUserText`),
        fetchStatus:activeChannel.get(`fetchStatus`),
        userStatus:currentUserSelector(state).get(`status`)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text,channel) => {
            dispatch(updateChannelInputText(channel,text));
        },
        submitMessage: (text,channel) => {
            dispatch(submitChannelInputText(channel,text));
        }
    }
};

export const CurrentChannelTextInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrentChannelTextInput);