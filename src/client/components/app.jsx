/* eslint-disable import/extensions */
import React from 'react';
import MyTimer from './Pomodoro.jsx';

function App() {
  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 1500);
  return (
    <div>
      <h1>Shed-O</h1>
      <div>
        <MyTimer />
      </div>
    </div>
  );
}

export default App;
