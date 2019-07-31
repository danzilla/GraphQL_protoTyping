/* SQL statementz - FirstRun
 * database_Name - blingblaw_assets
 * │
 * └───Schema - users
 * |   │   Table - user_auth - user_id
 * |   │   Table - user_details - user_id
 * │   │   Table - fannypacks - fannypacks_id
 * └───Schema - fannypacks
 * |   │   Table - account_category - account_category_id
 * │   │   Table - account_type - account_type_id
 * │   │   Table - account_record - account_id
 * │   │   Table - account_One - account_id
 * 
    Create - FirstRun
    - Requirement
        - > No-input require
    - Create Database
        - create blingBlaw
    - Create Schema
        - create users_assets
    - Create Table
        - create users_assets.user_auth_table
        - create users_assets.user_details_table
        - create users_assets.fannypacks_table

drop_Database()
kill_connection()
create_Database()
create_Schema()
create_Table_UserAuth() 
create_Table_UserDetails()
create_Table_fannyPackz()
 */
// App Global config
// DB db_config
const db_config = require('../../app.db');
const danzillaDB = require("../../danzillaDB");
// Message
let pushD = { 
    title: "Drop Database - " + db_config.database_labels.db_name, 
    checked: "", 
    results: "" 
}
// Drop Database - using -  danzillaDB.postgresDefault
const kill_connection = function (FirstRunCheck) {
    // Kill Connection
    let sql_kill_connection_query = `SELECT *, pg_terminate_backend(pid)
                                    FROM pg_stat_activity 
                                    WHERE pid <> pg_backend_pid()
                                    AND datname = ` + db_config.database_labels.db_name
    // SQL Query - Fire
    danzillaDB.postgresDefault.query(sql_kill_connection_query,
    // err catch
    function (err, Results) {
        if (!err && Results) { // If no errors and Results == Good
            pushD.checked = "checked"; 
            pushD.results = Results;
            FirstRunCheck.push(pushD);
        } else if (err) { // if any errors
            pushD.checked = "";
            pushD.results = err;
            FirstRunCheck.push(pushD);
        }
        console.log("\n\n Kill-connection: " + JSON.stringify(pushD));
    });
}
module.exports = kill_connection;
