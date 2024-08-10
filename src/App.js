import React from 'react'
import CurrentTimer from './components/FCurrentTime/CurrentTimer'
import './App.css'
import Timer from './components/timer/Timer'

function App() {
  return (
    <div className='main'>
      <CurrentTimer />
      <Timer />
    </div>
  )
}

export default App
