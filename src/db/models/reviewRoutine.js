const mongoose = require('mongoose');
const db = require('../index');

const reviewRoutineSchema = mongoose.Schema({
  transcription: String,
  improvisation: String,
  implementation: String,
});

const reviewRoutine = mongoose.model('review routine', reviewRoutineSchema);

module.exports = reviewRoutine;
