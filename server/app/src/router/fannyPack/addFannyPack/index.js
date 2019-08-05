// REST - Router - FannyPack
/* 
   Database - blingblaw
   └───Schema - users
    | │ Table - user_auth
    | │ Table - user_details
    │ │ Table - fannypacks
    └───Schema - fannypacks_fanny_serial
    | │ Table - account_category
    │ │ Table - account_type 
    │ │ Table - account_record
    │ │ Table - account_account_serial
     
	create_schema_user_fannyPack
	create_table_account_category
	create_table_account_records
	create_table_account_types
	add_newFannyPack_to_fannypacks_table
*/

// Register FannyPack | Keep it minimal
const async = require('async');
// Generate - unique_id 
// https://www.npmjs.com/package/uuid
// https://www.npmjs.com/package/uuid-token-generator
const uuidv5 = require('uuid/v5'); //string + salt
const uuidv1 = require('uuid/v1'); //Time_based - saltTime
const TokenGenerator = require('uuid-token-generator');
const Token = new TokenGenerator(); // New Token
const moment = require('moment'); // Time

const { using_blingblaw } = require('../../../config/util/process_sql_mutation');

const { create_schema_user_fannyPack, 
		add_newFannyPack_to_fannypacks_table } = require('../../../config/statement/fannyPack_sql_statement');

const { create_accountTransaction_table } = require('../../../config/statement/account_sql_statement');
const { create_accountCategory_table } = require('../../../config/statement/accountCategory_statement');
const { create_accounType_table } = require('../../../config/statement/accountType_sql_statement');
const { create_accountRecords_table } = require('../../../config/statement/accountRecord_sql_statement');

// addFanny
const addFanny = function (req, res, next) {
	// Collect Recults
	const addFannyPackResult = [];
	// Payload bzz
	const payLoad = {
		user_serial: uuidv5("req.body.userName", uuidv1()),
		user_name: "req.body.userName",
		user_pwd_salt: Token.generate() + "uno",
		user_pwd_hash: "req.body.password",
		user_auth_token: Token.generate(),
		user_full_name: "",
		user_email: "",
		user_created: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		user_modify: "",
		user_lastLogged: "",
		get user_auth_serial(){ return this.user_serial },
		fannyPack_serial: Token.generate(),
		fannyPack_name: "fannyPack_namefannyPack_name",
		fannyPack_created: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		fannyPack_lastmodify: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		fannyPack_lastUpdated: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		get fannyPack_owner_serial(){ return this.user_serial }
	}
	// Async Waterfall
    async.waterfall([
            // create_schema_user_fannyPack
        function (callback) {
			using_blingblaw(callback, create_schema_user_fannyPack, payLoad, addFannyPackResult)
        }, // add_newFannyPack_to_fannypacks_table
        function (res, callback) {
			using_blingblaw(callback, add_newFannyPack_to_fannypacks_table, payLoad, addFannyPackResult)
		}, // create_accountCategory_table
        function (res, callback) {
			using_blingblaw(callback, create_accountCategory_table, payLoad, addFannyPackResult)
		}, // create_accounType_table
		function (res, callback) {
			using_blingblaw(callback, create_accounType_table, payLoad, addFannyPackResult)
		}, // create_accountRecords_table
		function (res, callback) {
			using_blingblaw(callback, create_accountRecords_table, payLoad, addFannyPackResult)
		}
    ], function (err, Results) {
		console.log("Results: " + JSON.stringify(Results));
		console.log("err: " + JSON.stringify(err));
        res.send({ pageMesage: addFannyPackResult });
    });
}
module.exports = addFanny;



