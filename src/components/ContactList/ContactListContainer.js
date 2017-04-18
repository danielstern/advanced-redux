import React from 'react'

import { connect } from 'react-redux'

import {
    ContactList
} from './ContactList';

const mapStateToProps = (state) => {
    return {
        contacts:state.get(`currentUser`).get(`contacts`),
        name:state.get(`currentUser`).get(`name`)
    }
};

export const ContactListContainer = connect(
    mapStateToProps
)(ContactList);