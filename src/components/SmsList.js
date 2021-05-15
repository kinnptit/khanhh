import React, {useState, useEffect} from 'react';
import callAPI from "../utils/callAPI";
import {useParams} from "react-router";

export const SmsList = () => {
    const {userId} = useParams();
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const data = await callAPI({path: 'sms/get-sms', params: {id: userId}})
                setMessages(data)
            }
        }
        fetchData().then(r => console.log(r));
    }, [userId])

    if (!messages) {
        return <div>Loading...</div>
    }

    return messages.map((sms, index) => <Child key={index} {...sms} />)
}

const Child = ({user_id, contact_phone, content}) => {
    return (
        <div className="expand1">
            <div className="noti noti--success">
                Contact:
                <i className="fal fa-bell icon"/>
                <p className="desc">
                    {contact_phone}
                </p>
                <p className="desc">
                    {content}
                </p>
                <i className="fal fa-times close"/>
            </div>
        </div>
    )
}