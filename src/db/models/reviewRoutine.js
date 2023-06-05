const mongoose = require('mongoose');

const reviewRoutineSchema = mongoose.schema({
  transcription: String,
  improvisation: String,
  implementation: String,
});

const reviewRoutine = mongoose.model('routine', reviewRoutineSchema);

module.exports = reviewRoutine;
