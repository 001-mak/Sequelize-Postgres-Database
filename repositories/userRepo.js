const db = require('../models/index');


const getUsersRepo = async()=>{
    try {
        const users = await db.User.findAll({
            attributes: ['id', 'firstName', 'lastName', 'departmentId', 'projectId']
        })
        return users
    } catch (error) {
        console.log(error)
    }
}

const getUserRepo = async(userId)=>{
    try {
        const user = await db.User.findAll({
            where:{
                id : userId
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getUsersRepo, getUserRepo }