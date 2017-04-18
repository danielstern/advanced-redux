import React from 'react'

import { connect } from 'react-redux'
import { ContactListItem } from './ContactListItem';
import { openContactChannel } from './../../actions'
import { fromJS } from 'immutable';

const mapStateToProps = (state, {id}) => {
    // todo... add selector here
    const contact = fromJS({
        name:"Test",
        id:"test-id",
        status:"ONLINE"
    });
    // contact = state.get(`c`)
    return {
        name:contact.get(`name`),
        id:contact.get(`id`),
        status:contact.get(`status`),
    }
};

const mapDispatchToProps = (dispatch) => ({
    openChannel(id){
        dispatch(openContactChannel(id));
    }
});

export const ContactListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListItem);