/* eslint-disable import/extensions */
import React from 'react';
import MyTimer from './Pomodoro.jsx';
import LoginButton from './LoginButton.jsx';

function App() {
  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 1500);
  return (
    <div>
      <h1>Shed-O</h1>
      <LoginButton />
      <div>
        <MyTimer />
      </div>
    </div>
  );
}

export default App;
