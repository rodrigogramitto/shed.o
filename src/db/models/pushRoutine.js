const mongoose = require('mongoose');
const db = require('../index');

const pushRoutineSchema = mongoose.Schema({
  name: String,
  technique: [String, String, String, String],
  integration: String,
  implementation: String,
});

const pushRoutine = mongoose.model('routine', pushRoutineSchema);

module.exports = pushRoutine;
