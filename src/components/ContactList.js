import React, {useState, useEffect} from 'react';
import callAPI from "../utils/callAPI";
import {useParams} from "react-router";

export const ContactList = ({contacts, setContacts, setSelectedContact}) => {
    const {userId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const data = await callAPI({path: 'contact/get-contact', params: {id: userId}})
                setContacts(data)
            }
        }
        fetchData().then(r => console.log(r));
    }, [userId])

    if (!contacts) {
        return <div>Loading...</div>
    }

    const handleChangeContact = (contact) => {
        console.log('clickeddd')
        console.log('selectedContact', contact)
        setSelectedContact(contact._id)
    }

    return (
        <div className="expand1">
            {contacts.map((contact, index) => <Child key={index}
                                                     onClick={() => handleChangeContact(contact)} {...contact} />)}
        </div>
    )
}

const Child = ({name, phone}) => {
    return (
        <div className="noti noti--success" style={{cursor: 'pointer'}}>
            Contact:
            <i className="fal fa-bell icon"></i>
            <p className="desc">
                {name}
            </p>
            <p className="desc">
                {phone}
            </p>
            <i className="fal fa-times close"></i>
        </div>
    )
}