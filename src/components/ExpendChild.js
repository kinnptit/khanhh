import React from 'react'
import "../App.css"
import './child.css'

function ExpandChild() {
    return (
        <div className="noti noti--success">
            <i className="fal fa-bell icon"></i>
            <p className="desc"><strong>Well done</strong> - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <i className="fal fa-times close"></i>
        </div>
    );
}

export default ExpandChild;
