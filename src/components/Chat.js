import React, {useState, useEffect} from 'react'
import Message from './Message'
import "../App.css"
import callAPI from "../utils/callAPI";
import {useParams} from "react-router";

function Chat({setMessages, messages, selectedContact, packageName}) {
    const {userId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await callAPI({
                path: 'message/get-list-group-message', params: {
                    userId,
                    contactId: selectedContact,
                    packageName
                }
            })
            setMessages(data)
        }
        fetchData().then(r => console.log(r));
    }, [userId])

    if(!messages) {
        return <div>Loading...</div>
    }

    return (
        <div className="chat">
            {messages.map((message, index) => <Message key={index} {...message}/>)}
        </div>
    );
}

export default Chat;
