// REST - Router - First Run and Initial_Database
/* First Run

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
     
	kill_connection
	drop_Database
	create_Database
    create_Schema
	create_Table_UserAuth
	create_Table_UserDetails
	create_Table_fannyPackz
*/

// If GraphQL return issue with database 
	// Come Here - First Run
		// Create App_Database and zz
		/*
			kill_connection
			drop_Database
			create_Database
			create_Schema
			create_Table_UserAuth
			create_Table_UserDetails
			create_Table_fannyPackz
		*/

const async = require('async');
const { using_blingblaw,
		using_postgresDefault } = require('../../../config/util/process_sql_query');
const { kill_connection, 
		drop_app_Database,
		create_app_Database,
		create_app_Schema,
		create_Table_UserAuth,
		create_Table_UserDetails,
		create_Table_fannyPackz } = require('../../../config/statement/firstRun_sql_statement');
// initiate Database build Brrrr
const initialDatabase = function (req, res, next) {
	// Collect Recults
	let FirstRunResults = "[]";
	// prepare userData for submit 
	let userData = {};
/*
			using_postgresDefault(kill_connection)
			using_postgresDefault(drop_app_Database)
			using_postgresDefault(create_app_Database)
			using_blingblaw(create_app_Schema)
			using_blingblaw(create_Table_UserAuth)
			using_blingblaw(create_Table_UserDetails)
			using_blingblaw(create_Table_fannyPackz)
*/
	// Async Waterfall
    async.waterfall([
            // Drop Database
        function (callback) {
			using_postgresDefault(kill_connection, FirstRunResults)
			callback(null, FirstRunResults);
        },  // Create Database
        function (killResult, callback) {
			using_postgresDefault(drop_app_Database, FirstRunResults)
			callback(null, FirstRunResults);
		}, // Create Database
		function (killResult, callback) {
			using_blingblaw(create_app_Database, FirstRunResults)
			callback(null, FirstRunResults);
		}
    ], function (err, Results) {

		console.log("Results: " + JSON.stringify(Results));
		console.log("err: " + JSON.stringify(err));
        res.send({ pageMesage: Results });
    });


}
module.exports = initialDatabase;



