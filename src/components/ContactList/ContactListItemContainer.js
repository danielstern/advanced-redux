import React from 'react'

import { connect } from 'react-redux'
import { ContactListItem } from './ContactListItem';
import { userSelector } from './../../selectors'
import { openContactChannel } from './../../actions'

const mapStateToProps = (state, {id}) => {
    const contact = userSelector(id)(state);
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