import React from 'react'
import "./CurrentTime.css"
import { useState } from 'react'

function CurrentTimer() {
  let time =  new Date().toLocaleTimeString();
  const [ctime,Setctime] = useState(time);
  const update = () =>{
    time=new Date().toLocaleTimeString();
    Setctime(time);
  };

setInterval(update, 1000);

  return (
    <div>
      <h1>{ctime}</h1>
    </div>
  )
}

export default CurrentTimer
