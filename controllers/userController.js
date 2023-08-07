const {getUsersRepo} = require('../repositories/userRepo')

const getUsers = async (req, res) => {
  try { 
    const users = await getUsersRepo();
      res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Error");
  }

};

const createUser = (req, res) => {
  console.log("User Created");
};

const updateUser = (req, res) => {
  console.log("User Updated");
};
const deleteUser = (req, res) => {
  console.log("User Deleted");
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
