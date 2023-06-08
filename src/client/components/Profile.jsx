/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Profile({ routines, setRoutines }) {
  const { user } = useAuth0();
  const {
    name, picture, email, nickname,
  } = user;
  const [userRoutines, setUserRoutines] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get('/user', user)
        .then((results) => {
          console.log(results.body);
          setUserRoutines(results.body.routines);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, email, setRoutines]);

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <Avatar alt={name} src={picture} sx={{ width: 125, height: 125 }} />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{nickname}</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
