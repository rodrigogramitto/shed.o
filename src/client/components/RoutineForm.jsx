import React from 'react';

function RoutineForm() {
  return (
    <div>
      <h2>What are we working on today?</h2>
      <form id="practiceRoutine">
        <label className="routineElement">
          <h3>Technique:</h3>
          <h4>Choose Four:</h4>
          <input type="text" placeholder="Min-7 Arpeggios" />
          <input type="text" placeholder="Chromatic Scale" />
          <input type="text" placeholder="Coltrane permutations" />
          <input type="text" placeholder="Pentatonic Scale" />
        </label>
        <label>
          <h3>Integration:</h3>
          <h4>Take a resource and rehearse using it practically</h4>
          <input type="text" placeholder="Drop 3 chords" />
        </label>
        <label>
          <h3>Implementation:</h3>
          <h4>Play what you practiced over a tune you like</h4>
          <textarea type="text" placeholder="Min-7 arpeggios and coltrane lines over Strasbourg St. Denis, switch every 2 choruses to comp with Drop 3 chords" />
        </label>
      </form>
    </div>
  );
}

export default RoutineForm;
