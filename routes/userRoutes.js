const express = require("express");
const router = express.Router();

const {getUsers, createUser, updateUser, deleteUser} = require('../controllers/userController')


router.get('/users', getUsers);
router.post('/create-user', createUser);
router.put('/update-user', updateUser);
router.delete('/delete-user', deleteUser);

module.exports = router;
