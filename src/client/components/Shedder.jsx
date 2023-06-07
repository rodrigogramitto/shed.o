/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import RoutineForm from './RoutineForm.jsx';

function Shedder() {
  const [isFocusTime, setIsFocusTime] = useState(false);
  const focusTime = 25 * 60; // 25 minutes in seconds
  const restTime = 5 * 60; // 5 minutes in seconds

  const expiryTimestamp = isFocusTime ? focusTime : restTime;

  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
    // eslint-disable-next-line no-console
  } = useTimer({ expiryTimestamp, autoStart: false, onExpire: console.log('Expired') });

  const toggleTimer = () => {
    setIsFocusTime(!isFocusTime);
    const time = new Date();
    time.setSeconds(time.getSeconds() + (isFocusTime ? restTime : focusTime));
    restart(time);
  };

  return (
    <div>
      <div id="pomodoro">
        <div id="timer">
          <span>{minutes}</span>
          :
          <span>{seconds}</span>
        </div>
        <p>{isFocusTime ? 'Focus' : 'Rest'}</p>
        <button type="button" onClick={toggleTimer}>{isRunning ? 'Shed' : 'Rest'}</button>
        {isRunning ? <button type="button" onClick={pause}>Pause</button> : <button type="button" onClick={resume}>Resume</button>}
        <button
          type="button"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + (isFocusTime ? focusTime : restTime));
            restart(time);
          }}
        >
          Restart
        </button>
      </div>
      <RoutineForm toggleTimer={toggleTimer} />
    </div>
  );
}

export default Shedder;
