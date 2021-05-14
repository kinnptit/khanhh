import React from 'react'
import "../App.css"
import './user.css'

import {useHistory} from "react-router";

function User(props) {
    const history = useHistory()
    const onClick = () => {
        history.push(`/${props._id}`)
    }

    return (
        <div className="user" onClick={onClick}>

            <div className="recent-item">
                <img src="https://codingui.dev/images/girl1.jpeg" alt="" className="recent-image"/>
                <div className="recent-info">
                    <h3 className="recent-author">Samantha</h3>
                    <span className="recent-position">{props.phone}</span>
                </div>
            </div>
        </div>
    );
}

export default User;
