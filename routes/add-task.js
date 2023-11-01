const express = require('express');

const router = express.Router();
console.log('inside add-task route');

// parsing form data - middleware
router.use(express.urlencoded());

const addTaskController = require('../controllers/add_task_controller');

router.post('/' , addTaskController.addTask ); // '/route' and '/route/' have same  functionality

module.exports = router;