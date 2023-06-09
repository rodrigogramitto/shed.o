/* eslint-disable no-console */
import React, { useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function RoutineForm({ toggleTimer, setRoutines, routines }) {
  const routineName = useRef('');
  const tech1 = useRef('');
  const tech2 = useRef('');
  const tech3 = useRef('');
  const tech4 = useRef('');
  const integration = useRef('');
  const implementation = useRef('');
  const { isAuthenticated, user } = useAuth0();

  const handleClick = (e) => {
    e.preventDefault();
    toggleTimer();
    const routine = {};
    routine.name = routineName.current.value;
    routine.technique = [
      tech1.current.value, tech2.current.value, tech3.current.value, tech4.current.value];
    routine.integration = integration.current.value;
    routine.implementation = implementation.current.value;
    axios.post('http://localhost:3000/routine', routine)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    if (isAuthenticated) {
      user.routines = [routineName.current.value];
      axios.post('http://localhost:3000/user', user)
        .then((userRoutines) => {
          // push routine into routines
          setRoutines(routines.concat(userRoutines));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <h2>What are we working on today?</h2>
      <form id="practiceRoutine">
        <label className="routineElement" htmlFor="RoutineName">
          <input type="text" placeholder="Today's Routine" ref={routineName} id="RoutineName" />
        </label>
        <label className="routineElement" htmlFor="Technique">
          <h3>Technique:</h3>
          <h4>Choose Four:</h4>
          <input type="text" placeholder="Min-7 Arpeggios" ref={tech1} />
          <input type="text" placeholder="Chromatic Scale" ref={tech2} />
          <input type="text" placeholder="Coltrane permutations" ref={tech3} />
          <input type="text" placeholder="Pentatonic Scale" ref={tech4} />
        </label>
        <label htmlFor="Integration">
          <h3>Integration:</h3>
          <h4>Take a resource and rehearse using it practically</h4>
          <input type="text" placeholder="Drop 3 chords" ref={integration} />
        </label>
        <label htmlFor="Implementation">
          <h3>Implementation:</h3>
          <h4>Play what you practiced over a tune you like</h4>
          <textarea type="text" placeholder="Min-7 arpeggios and coltrane lines over Strasbourg St. Denis, switch every 2 choruses to comp with Drop 3 chords" ref={implementation} />
        </label>
        <button type="button" className="sheddingTime" onClick={handleClick}>Shedding Time</button>
      </form>
    </div>
  );
}

export default RoutineForm;
