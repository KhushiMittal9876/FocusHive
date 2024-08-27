import React from 'react'
import "./CurrentTime.css"
import { useState } from 'react'
import { motion } from 'framer-motion';

function CurrentTimer() {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  // getMonth() gives us previous month,Because getMonth() start from 0. You may want to have getMonth() + 1 to achieve what you want.
  const year = new Date().getFullYear();

  let time =  new Date().toLocaleTimeString();
  const [ctime,Setctime] = useState(time);
  const update = () =>{
    time=new Date().toLocaleTimeString();
    Setctime(time);
  };

setInterval(update, 1000);

  return (
    <motion.div className='currentDateTime' 
    drag
    dragConstraints={{ left:0, right: 900 ,top: 0,bottom :200 }}
    dragElastic={2} >
    <span>{date}/{month}/{year}</span>
    <h1>{ctime}</h1>
    </motion.div>
  )
}

export default CurrentTimer
