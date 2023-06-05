const mongoose = require('mongoose');

const pushRoutineSchema = mongoose.schema({
  technique: [String, String, String, String],
  integration: String,
  implementation: String,
});

const pushRoutine = mongoose.model('routine', pushRoutineSchema);

module.exports = pushRoutine;
