const db = require("../models/index");

const getDepartmentsRepo = async () => {
  try {
    const departments = await db.Department.findAll({
      attributes: ["id", "departmentName", "phone"],
    });
    return departments;
  } catch (error) {
    console.log(error);
  }
};

const getDepartmentRepo = async (reqId) => {
  try {
    const department = await db.Department.findOne({
      attributes: ["id", "departmentName", "phone"],
      where: {
        id: reqId,
      },
    });
    return department;
  } catch (error) {
    console.log(error);
  }
};

const createDepartmentRepo = async (departmentObj) => {
  try {
    const department = await db.Department.create({
        id:departmentObj.id,
        departmentName : departmentObj.departmentName,
        phone: departmentObj.phone,
        createdAt: departmentObj.createdAt,
        updatedAt: departmentObj.updatedAt,
    });
    return department;
  } catch (error) {
    console.log(error);
  }
};

const deleteDepartmentRepo = async (reqId) => {
    try {
      const department = await db.Department.destroy({
        where: {
          id: reqId,
        },
      });
      return department;
    } catch (error) {
      console.log(error);
    }
  };
  const updateDepartmentRepo = async (reqId,updatedObj) => {
    try {
      const department = await db.Department.update(updatedObj,{
        where: {
          id: reqId,
        },
      });
      return department;
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {
  getDepartmentsRepo,
  getDepartmentRepo,
  createDepartmentRepo,
  deleteDepartmentRepo,
  updateDepartmentRepo,
};
