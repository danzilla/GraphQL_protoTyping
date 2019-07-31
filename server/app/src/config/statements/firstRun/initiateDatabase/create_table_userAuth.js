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
    title: "Create Table - " + db_config.database_labels.table_users_auth, 
    checked: "", 
    results: "" 
}
// Create Schema - users - using -  danzillaDB.pool
const create_table_userAuth = function (callback, FirstRunCheck) {
    // Create Table - table_users_auth
    let sql_statement = `CREATE TABLE IF NOT EXISTS
        ${db_config.database_labels.schema_name}.${db_config.database_labels.table_users_auth}
        (
            user_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
            user_serial VARCHAR(36) UNIQUE NOT NULL,
            user_name VARCHAR(12) UNIQUE NOT NULL,
            user_pwd_salt VARCHAR(254) NOT NULL,
            user_pwd_hash VARCHAR(254) NOT NULL,
            user_auth_token VARCHAR(36)
        );`;
    // SQL Query - Fire
    danzillaDB.pool.query(sql_statement,
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
        callback(null, FirstRunCheck);
    });
}
module.exports = create_table_userAuth;
