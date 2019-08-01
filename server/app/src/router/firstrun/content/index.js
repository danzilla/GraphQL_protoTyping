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

const statement = require('../../../config/statement/firstRun_sql_statement')
const { blingblaw, postgresDefault } = require('../../../config/app.config')
// Brrrr
const FirstRun = function (req, res, next) {
	// Collect Recults
	let pageResult = [];
	let pageMesage = {title:"", message: "", checked: "", result: "" };
	// Query - Async
	function insertSql(sql_statement) {
		return new Promise((resolve, reject) => {
			blingblaw.connect((err, client, release) => {
				if (err) {  // On issue with DB connection - Reject
					pageMesage = {title: sql_statement.title, message: 'Error acquiring client', checked: err.code, result:  err.stack}
					reject(pageMesage)
				} // else - Resolve
				client.query(sql_statement.sql, (err, result) => {
					if (err) {  
						pageMesage = {title: sql_statement.title, message: 'Error executing query', checked: err.code, result:  err.stack}
						resolve(pageMesage)
					}
					if (result) {
						pageMesage = {title: sql_statement.title, message: 'Yeee', checked: "checked", result:  result}
						resolve(pageMesage)
					}
					// release connection
					release();
				});
			});
		});
	}
	// FirstRun
	async function FirstRun() {
		const aa = await insertSql(statement.kill_connection);
		const ab = await insertSql(statement.drop_app_Database);
		const ac = await insertSql(statement.create_app_Database);
		const ad = await insertSql(statement.create_app_Schema);
		const ae = await insertSql(statement.create_app_Table_UserAuth);
		const af = await insertSql(statement.create_app_Table_UserDetails);
		const ag = await insertSql(statement.create_app_Table_fannyPackz);
		pageResult.push(aa, ab, ac, ad, ae, af, ag);
		res.send({ pageMesage: pageResult });
	}
	// FirstRun - fire
	FirstRun();
}
module.exports = FirstRun;



