import React from 'react'
import "./CurrentTime.css"
import { useState } from 'react'

function CurrentTimer() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  let time =  new Date().toLocaleTimeString();
  const [ctime,Setctime] = useState(time);
  const update = () =>{
    time=new Date().toLocaleTimeString();
    Setctime(time);
  };

setInterval(update, 1000);

  return (
    <div className='currentDateTime'>
    <span>{date}/{month}/{year}</span>
      <h1>{ctime}</h1>
    </div>
  )
}

export default CurrentTimer
