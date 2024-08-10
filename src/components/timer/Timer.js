import React, { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";
import { MdOutlinePause } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import "./Timer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);
  const [showdiv, setShowdiv] = useState(false);
  const notify = () => toast.success("Time Completed!");
  const alert = () => toast.error("Enter Valid values!!");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }
    if (hours === 0 && minutes === 0 && seconds === 1) {
      notify();
      restartTimer();
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, isRunning]);

  const startTimer = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert();
    } else {
      setIsRunning(true);
    }
  };

  const reValueTimer = () => {
    restartTimer();
  };
  const restartTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };
  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const changeHours = (e) => {
    setHours(e.target.value);
  };
  return (
    <>
      <div className="mainbox">
      {showdiv && <div className="timerBox">
          <div className="bgbox"></div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="dark"
          />
          <div className="box">
            <div className="cont">
              <label htmlFor="">hh</label>
              <input type="text" value={hours} onChange={changeHours} />
            </div>
            <div className="cont">
              <label htmlFor="">mm</label>
              <input type="text" value={minutes} onChange={changeMinutes} />
            </div>
            <div className="cont">
              <label htmlFor="">ss</label>
              <input type="text" value={seconds} onChange={changeSeconds} />
            </div>
          </div>
          {!isRunning && (
            <button className="playbtn" onClick={startTimer}>
              <FaPlay />
            </button>
          )}
          {isRunning && (
            <button className="pausebtn" onClick={pauseTimer}>
              <MdOutlinePause />
            </button>
          )}{" "}
          <button className="restartbtn" onClick={reValueTimer}>
            <VscDebugRestart />
          </button>
        </div>}
      </div> 
      <button className="btn Timer" onClick={()=>setShowdiv((prev) => !prev)}><TfiTimer />{!showdiv ? <h2>Show Timer</h2> : <h2>Hide Timer</h2>}</button>
    </>
  );
}

export default Timer;
