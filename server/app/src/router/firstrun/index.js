// firstrun - Router

const express = require('express');
const router = express.Router();

// GET
// initiate Data base /firstrun
const firstrun = require('./content');
router.route('/').get(firstrun);

module.exports = router;
