/* Firstrun - Router
 * Keep it minimal
 */
const express = require('express');
const router = express.Router();

// initiate Data base /firstrun
const initiateDB = require('./content');
router.route('/').get(initiateDB);

module.exports = router;
