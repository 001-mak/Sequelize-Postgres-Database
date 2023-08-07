const {
  getDepartmentsRepo,
  getDepartmentRepo,
  createDepartmentRepo,
  deleteDepartmentRepo,
  updateDepartmentRepo,
} = require("../repositories/departmentRepo");

const getDepartments = async (req, res) => {
//   try {
    const departments = await getDepartmentsRepo();
    res.status(200).send(departments);
//   } catch (error) {
//     console.log(error);
//   }
};

const createDepartment = async (req, res) => {
  try {
    const department = await createDepartmentRepo(req.body);
    res.status(200).send(department);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDepartments, createDepartment };
