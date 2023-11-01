
// database setup

const db = require('../config/mongoose');

const Task = require('../models/task');
console.log("inside add task controller");

//exporting addTask
module.exports.addTask = function(req,res){
    
    Task.create({
        task : req.body.task,
        category : req.body.category,
        dueDate : req.body.date
    })
    .then(function(newTask,err){
        console.log('*******',newTask);
        return res.redirect('back');
    })
    .catch(function(err){
        console.log('error in adding Task' , err);
    });
}