// REST - Router - First Run and Initial_Database 
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

const { kill_connection, 
		drop_app_Database,
		create_app_Database,
		create_app_Schema } = require('../../../config/statement/firstRun_sql_statement')

const { create_Table_UserAuth, 
		create_Table_UserDetails } = require('../../../config/statement/user_sql_statement')

const { create_Table_fannyPackz } = require('../../../config/statement/fannyPack_sql_statement')
	

const { blingblaw, postgresDefault } = require('../../../config/app.config')
// Brrrr
const initialDatabase = function (req, res, next) {
	// Collect Recults
	let pageResult = [];
	let pageMesage = {title:"", message: "", checked: "", result: "" };
	// Query - Async
	// sql_statement: {title: "", sql: ""}
	function insertSql(sql_statement) {
		return new Promise((resolve, reject) => {
			// Query process
			function query_process(err, client, release){
				client.query(sql_statement.sql, (err, result) => {
					if (err) {  
						pageMesage = {title: sql_statement.title, message: 'Error executing query', checked: err.code, result:  err.stack};
						resolve(pageMesage);
					} else if (result) {
						pageMesage = {title: sql_statement.title, message: 'Yeee', checked: "checked", result:  result};
						resolve(pageMesage);
					}
				});
			}
			// Connection
			postgresDefault.connect((err, client, release) => {
				if (client) {
					// fire query_process
					query_process(err, client, release);
					// release connection
					release();
				} else if (err) {  // On issue with DB connection - Reject
					pageMesage = {title: sql_statement.title, message: 'Error acquiring client', checked: err.code, result:  err.stack};
					resolve(pageMesage);
					release();
				} else {
					pageMesage = {title: sql_statement.title, message: 'Something wrong', checked: "", result:  "nopenope"};
					resolve(pageMesage);
				}
			});
		});
	}

	// FirstRun
	async function FirstRun() {
		// push push push
		pageResult.push(
			await insertSql(kill_connection),
			await insertSql(drop_app_Database),
			await insertSql(create_app_Database),
			await insertSql(create_app_Schema),
			await insertSql(create_Table_UserAuth),
			await insertSql(create_Table_UserDetails),
			await insertSql(create_Table_fannyPackz)
		);
		res.send({ pageMesage: pageResult });
	}
	// FirstRun - fire
	FirstRun();
}
module.exports = initialDatabase;



