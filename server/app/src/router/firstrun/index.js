// firstrun - Router

const express = require('express');
const router = express.Router();

// GET
// initiate Data base /firstrun
const initialDatabase = require('./initialDatabase');
router.route('/').get(initialDatabase);

module.exports = router;
