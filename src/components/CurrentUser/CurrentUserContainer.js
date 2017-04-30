import React from 'react'
import { connect } from 'react-redux'
import { updateStatus } from './../../actions'
import { CurrentUser } from './CurrentUser';

const mapStateToProps = (state) => {
    const currentUser = state.get(`currentUser`);
    return {
        name:currentUser.get(`name`),
        status:currentUser.get(`status`),
        id:currentUser.get(`id`)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateStatus: ({target:{value}}) => {
            dispatch(updateStatus(value));
        }
    }
};

export const CurrentUserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentUser);