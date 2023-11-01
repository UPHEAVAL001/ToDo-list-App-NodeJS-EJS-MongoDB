
// database setup

const db = require('../config/mongoose');

const Task = require('../models/task');


//exporting deleteTask
module.exports.deleteTask = function(req,res){
    
    for (let i in req.body){
        Task.findByIdAndDelete(req.body[i])
        .then(function(){
            return res.redirect('back');
        })
        .catch(function(err){
            console.log('error in deleting the task' , err);
        }) 
    } 

}