
// database setup

const db = require('../config/mongoose');

const Task = require('../models/task');


//exporting home
module.exports.home = function(req,res){
    Task.find({})
    .then(function(tasks){
        return res.render('home', {
            'title': 'TODO App',
            "task_list" : tasks
        }); 
    })
    .catch(function(err){
        console.log('error in finding docs' , err);
    });
}