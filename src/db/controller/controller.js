const model = require('../models/model');

// eslint-disable-next-line object-shorthand
const findUser = (email) => model.user.findOne({ email: email });

module.exports.findUser = findUser;
