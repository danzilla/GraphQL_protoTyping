// REST - Router - UserAdd
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
     
	add_user_to_userAuth
	add_user_to_userDetails
	create_schema_user_fannyPack
	create_table_account_category
	create_table_account_records
	create_table_account_types
	add_newFannyPack_to_fannypacks_table
*/

const async = require('async');
const { using_blingblaw,
		using_postgresDefault } = require('../../../config/util/process_sql_query');
const { kill_connection, 
		drop_app_Database,
		create_Table_fannyPackz } = require('../../../config/statement/firstRun_sql_statement');




// addUser
const addUser = function (req, res, next) {
	// Collect Recults
	const FirstRunResults = [];
	// Async Waterfall
    async.waterfall([
            // kill_connection
        function (callback) {
			using_postgresDefault(callback, kill_connection, FirstRunResults)
        },  // drop_app_Database
        function (res, callback) {
			using_postgresDefault(callback, drop_app_Database, FirstRunResults)
		}, // create_app_Database
		function (res, callback) {
			using_postgresDefault(callback, create_app_Database, FirstRunResults)
		}, // create_app_Schema
		function (res, callback) {
			using_blingblaw(callback, create_app_Schema, FirstRunResults)
		}, // create_Table_UserAuth
		function (res, callback) {
			using_blingblaw(callback, create_Table_UserAuth, FirstRunResults)
		}, // create_Table_UserDetails
		function (res, callback) {
			using_blingblaw(callback, create_Table_UserDetails, FirstRunResults)
		}, // create_Table_fannyPackz
		function (res, callback) {
			using_blingblaw(callback, create_Table_fannyPackz, FirstRunResults)
		}
    ], function (err, Results) {

		console.log("Results: " + JSON.stringify(Results));
		console.log("err: " + JSON.stringify(err));
		
        res.send({ pageMesage: FirstRunResults });
    });
}
module.exports = addUser;



