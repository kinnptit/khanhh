import React, {useState, useEffect} from 'react'
import Message from './Message'
import "../App.css"
import callAPI from "../utils/callAPI";
import {useParams} from "react-router";

function Chat() {
    const {userId} = useParams();
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await callAPI({
                path: 'message/get-list-group-message', params: {
                    userId,
                    contactId: '609e67f7017f494cd2c4c31a',
                    packageName: 'com.facebook.orca'
                }
            })
            setMessages(data)
        }
        fetchData().then(r => console.log(r));
    }, [userId])

    return (
        <div className="chat">
            {messages.map((message, index) => <Message key={index} {...message}/>)}
        </div>
    );
}

export default Chat;
