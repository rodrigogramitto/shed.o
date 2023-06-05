const mongoose = require('mongoose');

const userSchema = mongoose.schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
});

const user = mongoose.model('User', userSchema);

module.exports = user;
