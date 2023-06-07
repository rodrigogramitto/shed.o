/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Profile() {
  const { user } = useAuth0();
  const {
    name, picture, email, nickname,
  } = user;
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get('/user', user)
        .then((results) => {
          console.log(results.body);
          setRoutines(results.body);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, email]);

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
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default Profile;
