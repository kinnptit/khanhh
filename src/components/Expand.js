import React from 'react'
import Expand1 from './Expand1'
import "../App.css"
import {Location} from "./Location";
import {SmsList} from "./SmsList";

function Expand() {
    return (
        <div className="expand">
            <SmsList/>
            <Location/>
        </div>
    );
}

export default Expand;
