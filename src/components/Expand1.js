import React from 'react'
import Message from './Message'
import "../App.css"
import ExpandChild from './ExpendChild'
function Expand1() {
  return (
    <div className="expand1">
        <ExpandChild/>
        <ExpandChild/>
        <ExpandChild/>
        <ExpandChild/>
    </div>
  );
}

export default Expand1;
