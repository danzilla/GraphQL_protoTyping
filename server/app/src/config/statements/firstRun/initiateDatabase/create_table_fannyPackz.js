/* SQL statementz - FirstRun
 * 
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
 */
// App Global config
// DB db_config
const db_config = require('../../app.db');
const danzillaDB = require("../../danzillaDB");
// Message
let pushD = { 
    title: "Create Table - " + db_config.database_labels.table_users_fannyPack, 
    checked: "", 
    results: "" 
}
// Create Schema - users - using -  danzillaDB.pool
const create_table_fannyPackz = function (callback, FirstRunCheck) {
    // Create Table - table_users_fannyPack
    let sql_statement = `CREATE TABLE IF NOT EXISTS 
        ${db_config.database_labels.schema_name}.${db_config.database_labels.table_users_fannyPack}
        (
            fannyPack_serial VARCHAR(36) UNIQUE NOT NULL,
            fannyPack_name VARCHAR(254),
            fannyPack_created TIMESTAMP,
            fannyPack_lastmodify TIMESTAMP,
            fannyPack_lastUpdated TIMESTAMP,
            fannyPack_owner_serial VARCHAR(36) NOT NULL
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
module.exports = create_table_fannyPackz;
