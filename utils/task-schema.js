const Joi= require('joi');//joi to validate the data

const taskSchema = {
name: Joi.string().min (3). required (),
 completed: Joi.boolean()
 };

 exports.validateTask = (task) => Joi.validate(task, taskSchema);
