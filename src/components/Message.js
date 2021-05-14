import React from 'react'

import "../App.css"

function Message({
                     contact,
                     content,
                     is_user_self,
                     package_name,
                     phone,
                     sender,
                     time_get,
                     time_send
                 }) {
    return (
        <div className="noti noti--message">
            <i className="fal fa-bell icon"></i>
            <p className="desc">{content}
            </p>
            <i className="fal fa-times close"></i>
        </div>
    );
}

export default Message;
