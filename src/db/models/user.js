const mongoose = require('mongoose');
// const db = require('../index');

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  nickname: String,
  routines: [String],
});

const user = mongoose.model('User', userSchema);

module.exports = user;
