import React, {useState, useEffect} from 'react';
import callAPI from "../utils/callAPI";
import {useParams} from "react-router";

export const Location = () => {
    const [locations, setLocations] = useState(null)
    const {userId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const data = await callAPI({path: 'location/get-location', params: {id: userId}})
                console.log(data, 'gge');
                setLocations(data)
            }
        }
        fetchData().then(r => console.log(r));
    }, [userId])

    if (!locations) {
        return <div>Loading...</div>
    }

    return <Child {...locations} />
}

const Child = ({lat, lng}) => {
    return (
        <div className="noti noti--success">
            Location:
            <i className="fal fa-bell icon"></i>
            <p className="desc">
                {lat}
            </p>
            <p className="desc">
                {lng}
            </p>
            <i className="fal fa-times close"></i>
        </div>
    )
}