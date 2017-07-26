import React from 'react'

import { connect } from 'react-redux'
import { ContactListItem } from './ContactListItem';
import { fromJS } from 'immutable';


const mapStateToProps = (state, {id}) => {
    // todo... add selector here
    const contact = fromJS({
        name:id,
        id,
        status:"ONLINE"
    });

    return {
        name:contact.get(`name`),
        id:contact.get(`id`),
        status:contact.get(`status`),
    }
};

const mapDispatchToProps = (dispatch) => ({
    openChannel(id){
        console.log("Opening channel...",id);
    }
});

export const ContactListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListItem);