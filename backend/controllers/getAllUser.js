const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.send("Error " + err);
  }
};

module.exports = getUsers;
