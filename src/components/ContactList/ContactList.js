import React from 'react'
import { ContactListItemContainer } from './ContactListItemContainer'

export const ContactList = ({contacts,name,openConversation})=>(
    <div>
        <div>
            <h3>{name}'s Contacts</h3>
        </div>
        <div>
            {contacts.map(contact=>(
                <ContactListItemContainer key={contact} id={contact}/>
            ))}
        </div>
    </div>
);