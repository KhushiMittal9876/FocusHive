import React, { useState } from 'react'
import "./Navbar.css"
import { PiTimerFill } from "react-icons/pi";
import { FaListCheck } from "react-icons/fa6";
import Timer from '../timer/Timer';
import ToDo from '../ToDo/ToDo';
import { motion } from 'framer-motion';

function Navbar() {
    const [showTimer, setShowTimer] = useState(false);
    const [showToDo, setShowToDo] = useState(false);

    const handleClickTimer= ()=>{
        setShowTimer((prev) => !prev);
        setShowToDo(false);
    }
    const handleClickToDo= ()=>{
      setShowToDo((prev) => !prev);
      setShowTimer(false);
    }

  return (
    <div className='main'>
    <div className="tum">
      {showTimer && <Timer />}
      {showToDo && <ToDo />}

    </div>
      <div className='sidebar' >
      <motion.li className='timer1' onClick={handleClickTimer} whileHover={ {scale: 1.1, color:'#192922'}}><PiTimerFill /> </motion.li>
      <motion.li className='timer1' onClick={handleClickToDo}  whileHover={ {scale: 1.1, color:'#192922'}}><FaListCheck /></motion.li>
    </div>
    </div>
    
  )
}

export default Navbar
