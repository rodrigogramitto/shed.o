const model = require('../models/model');
// const db = require('../index');

const findUser = async (email) => {
  try {
    const user = await model.user.findOne({ email });
    return user;
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

module.exports.findUser = findUser;
module.exports.findRoutine = findRoutine;
module.exports.saveRoutine = saveRoutine;
