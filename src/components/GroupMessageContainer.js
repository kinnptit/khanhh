import React, {useState} from 'react'
import Chat from "./Chat";
import {ContactList} from "./ContactList";

export const GroupMessageContainer = () => {
    const [messages, setMessages] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [packageName, setPackageName] = useState('com.zing.zalo');

    // com.facebook.orca

    return (
        <div>
            <ContactList contacts={contacts} setContacts={setContacts}
                         setSelectedContact={setSelectedContact}/>
            <Chat messages={messages} setMessages={setMessages} selectedContact={selectedContact}
                  packageName={packageName}/>
        </div>
    )
}