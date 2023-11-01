const express = require('express');

const router = express.Router();

//importing home_controller
const homeController = require('../controllers/home_controller');

console.log('Router Loaded');

router.get('/' , homeController.home);
router.use('/add-task', require('./add-task'));
router.use('/delete-task', require('./delete-task'));



module.exports = router;