import './App.css';
import React, { useState } from 'react'

function App() {
  const [countdown, setCountdown] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { // 13 is the code for the Enter key
      const input = parseInt(e.target.value);
      // console.log(input)
      const time = isNaN(input) ? 0 : Math.floor(input);
      // console.log(time)
      setCountdown(time);
      e.target.value = '';

      if (intervalId) {
        clearInterval(intervalId);
      }

      if (time > 0) {
        const id = setInterval(() => {
          setCountdown((prev) => {
            const newCountdown = prev - 1;
            if (newCountdown < 0) {
              clearInterval(id);
              return 0;
            }
            return newCountdown;
          });
        }, 1000);
        setIntervalId(id);
      }
    }
  };
  return (
    <div className="container">
      <div>Enter time : </div>
      <input type='number' id='timeCount' onKeyDown={handleKeyDown} />
      <div id="current-time">{countdown > 9 ? countdown : "0" + countdown}</div>
    </div>
  );
}

export default App;
