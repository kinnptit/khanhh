import React, {useEffect, useState} from 'react'
import User from './User'
import "../App.css"
import callAPI from "../utils/callAPI";

function UserList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUserData = async () => {
            const dataUsers = await callAPI({path: 'user/get-all-user'})
            setUsers(dataUsers)
        }
        fetchUserData()
    }, [])

    return (
        <div className="user-list">
            {users.map((user, index) => <User key={index} {...user}/>)}
        </div>
    );
}

export default UserList;
