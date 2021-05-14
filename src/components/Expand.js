import React from 'react'
import Expand1 from './Expand1'
import "../App.css"
import {Location} from "./Location";
function Expand() {
  return (
    <div className="expand">
        <Expand1/>
        <Expand1/>
        <Location />
    </div>
  );
}

export default Expand;
