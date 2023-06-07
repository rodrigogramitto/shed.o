/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Shedder from './Shedder.jsx';
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import Profile from './Profile.jsx';
import MyShedButton from './MyShedButton.jsx';

function App() {
  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 1500);

  const { isAuthenticated } = useAuth0();
  const [profileView, setProfileView] = useState(false);

  const view = () => {
    let componentToShow;
    if (profileView) {
      if (isAuthenticated) {
        componentToShow = <Profile />;
      } else {
        componentToShow = <Shedder />;
      }
    } else {
      componentToShow = <Shedder />;
    }
    return componentToShow;
  };

  const toggleProfile = () => {
    setProfileView(!profileView);
  };

  return (
    <div>
      <h1>Shed-O</h1>
      <div className="login">
        { isAuthenticated ? <LogoutButton /> : <LoginButton /> }
      </div>
      <MyShedButton toggleProfile={toggleProfile} profileView={profileView} />
      <div>
        {view()}
      </div>
    </div>
  );
}

export default App;
