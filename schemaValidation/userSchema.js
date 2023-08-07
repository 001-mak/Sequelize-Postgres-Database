const Joi = require('joi');

const userSchema = Joi.object({
    id: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    departmentId: Joi.number().required(),
    projectId: Joi.number().required(),
})

module.exports = {userSchema}