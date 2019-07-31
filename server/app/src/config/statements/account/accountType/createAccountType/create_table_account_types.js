/* SQL statementz - FannyPack
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
    Create - FannyPack
    - Requirement
        - > fannyPackName, userSerialID, fannyPackSerial
    - Create Schema
        - create fannypack_userID_fannypacks_serial
    - Create Table
        - create fannypack_userID_fannypacks_serial.account_types_table
        - create fannypack_userID_fannypacks_serial.account_category_table
        - create fannypack_userID_fannypacks_serial.account_record_table
    - Add
        - Add FannyPack_info to users_assets.fannypacks_table
        - Add SampleAccountType to fannypack_userID_fannypacks_serial.account_types_table
        - Add SampleCategory to fannypack_userID_fannypacks_serial.account_category_table

create_schema_user_fannyPack(userData)
create_table_account_category(userData)
create_table_account_records(userData)
create_table_account_types(userData)
add_newFannyPack_to_fannypacks_table(userData)
 */
// DB Labels
const db_config = require('../../../app.db');
// DB Connections
const danzillaDB = require("../../../danzillaDB");
// pageMessage
let pageMessage = { title: "create_table_account_types", checked: "", message: "", results: "" };
// Create Table - create_table_account_types
// Function - Create Table - account_types
const create_table_account_types = function (callback, userData, createTableAccountTypesResults) {
    // Create Table - create_Category_Table
    let sql_statement = `CREATE TABLE IF NOT EXISTS fannyPack_${userData.fannyPackSerial}.${db_config.database_labels.table_fannyPack_type}
    (
        account_type_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
        account_type_name VARCHAR(254) UNIQUE NOT NULL,
        account_type_created TIMESTAMP,
        account_type_lastmodify TIMESTAMP
    );`;
    // SQL Query - Fire
    danzillaDB.pool.query(sql_statement,
        // err catch
        function (err, Results) {
            // If no errors and Results == Good
        if (!err && Results) { 
            pageMessage.checked = "checked";
            pageMessage.message = "Created account_types_table!";
            pageMessage.results = Results;
        } // if any errors
        else if (err) {
            pageMessage.checked = err.code;
            pageMessage.message = "Error creating to account_types_table";
            pageMessage.results = err;
        } // if any else
        else {
            pageMessage.checked = "Internal_Error";
            pageMessage.message = "Internal Error";
            pageMessage.results = "Internal Error";
        }
        createTableAccountTypesResults.create_table_account_types = pageMessage;
        callback(null, pageMessage);
    });
}
module.exports = create_table_account_types;
