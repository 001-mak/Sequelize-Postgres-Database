const express = require("express");
const router = express.Router();

const {getDepartments,createDepartment} = require('../controllers/departmentController')


router.get('/departments', getDepartments);
router.post('/create-department', createDepartment);

module.exports = router;