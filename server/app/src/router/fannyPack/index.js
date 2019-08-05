// FannyPack - Router

const express = require('express');
const router = express.Router();

// GET
// add FannyPack
const addUser = require('./addFannyPack');
router.route('/add').get(addUser);

module.exports = router;
