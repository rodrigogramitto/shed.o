const mongoose = require('mongoose');
const db = require('../index');

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
});

const user = mongoose.model('User', userSchema);

module.exports = user;
