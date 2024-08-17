import React, { useState } from 'react'
import "./Navbar.css"
import { PiTimerFill } from "react-icons/pi";
import { FaListCheck } from "react-icons/fa6";
import Timer from '../timer/Timer';
import ToDo from '../ToDo/ToDo';

function Navbar() {
    const [showTimer, setShowTimer] = useState(false);
    const [showToDo, setShowToDo] = useState(false);

    const handleClickTimer= ()=>{
        setShowTimer((prev) => !prev);
    }
    const handleClickToDo= ()=>{
      setShowToDo((prev) => !prev);
    }

  return (
    <div className='main'>
    <div className="tum">
      {showTimer && <Timer />}
      {showToDo && <ToDo />}

    </div>
      <div className='sidebar'> 
      <PiTimerFill  className='timer1' onClick={handleClickTimer}/>
      <FaListCheck className='timer1' onClick={handleClickToDo}/>
    </div>
    </div>
    
  )
}

export default Navbar
