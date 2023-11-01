const express = require('express');

const router = express.Router();

// parsing form data - middleware
router.use(express.urlencoded());

const deleteTaskController = require('../controllers/delete_task_controller');

router.post('/' , deleteTaskController.deleteTask ); // '/route' and '/route/' have same  functionality

module.exports = router;