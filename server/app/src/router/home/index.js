// Home - Router

const express = require('express');
const router = express.Router();

// initiate Data base /firstrun
const Home = require('./content');
router.route('/').get(Home);

module.exports = router;
