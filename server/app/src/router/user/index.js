// Add user - Router
const express = require('express');
const router = express.Router();

// GET
// add user
const addUser = require('./addUser');
router.route('/add').get(addUser);
// Login user
const loginUser = require('./loginUser');
router.route('/login').get(loginUser);

module.exports = router;
