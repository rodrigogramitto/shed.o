const model = require('../models/model');
// const db = require('../index');

const getUser = async (user) => {
  try {
    const foundUser = await model.user.findOneAndUpdate({ email: user.email }, user, {
      new: true,
      upsert: true,
      rawResult: true,
    });
    return foundUser;
  } catch (err) {
    return err;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await model.user.create({ user });
    return newUser;
  } catch (err) {
    return err;
  }
};

const findRoutine = async (name) => {
  try {
    const routine = await model.pushRoutine.findOne({ name });
    return routine;
  } catch (err) {
    return err;
  }
};

const saveRoutine = async (routine) => {
  try {
    const result = await model.pushRoutine.create(routine);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports.getUser = getUser;
module.exports.findRoutine = findRoutine;
module.exports.saveRoutine = saveRoutine;
module.exports.createUser = createUser;
