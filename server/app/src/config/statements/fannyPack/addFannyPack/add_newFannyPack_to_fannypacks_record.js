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
const db_config = require('../../app.db');
// DB Connections
const danzillaDB = require("../../danzillaDB");
// pageMessage
let pageMessage = { title: "add_newFannyPack_to_fannypacks_table", checked: "", message: "", results: "" };
// FannyPack Record
// Function - Insert user FannyPack to FannyPack record
const add_newFannyPack_to_fannypacks_table = function(callback, userData, addFannyPackToFannyPacksTableResults) {
  `
    fannyPack_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    fannyPack_serial VARCHAR(36) UNIQUE NOT NULL,
    fannyPack_name VARCHAR(254),
    fannyPack_created TIMESTAMP,
    fannyPack_lastUpdated TIMESTAMP,
    fannyPack_owner_serial VARCHAR(36) NOT NULL
  `
  // Insert Data
  const userAddData = [
    userData.fannyPackSerial, 
    userData.fannyPack, 
    userData.fannyPack_created, 
    userData.fannyPack_lastUpdated,
    userData.userSerial
  ];
  // Insert Query
  let sql_statement = `INSERT INTO ${db_config.database_labels.schema_name}.${db_config.database_labels.table_users_fannyPack} 
                      (fannyPack_serial, fannyPack_name, fannyPack_created, fannyPack_lastUpdated, fannyPack_owner_serial) 
                      VALUES($1, $2, $3, $4, $5) RETURNING *;`;
  // Query
  danzillaDB.pool.query(sql_statement, userAddData,
    // err catch
    function (err, Results) {
        // If no errors and Results == Good
    if (!err && Results) { 
        pageMessage.checked = "checked";
        pageMessage.message = "Added to fannypacks_table!";
        pageMessage.results = Results;
    } // if any errors
    else if (err) {
        pageMessage.checked = err.code;
        pageMessage.message = "Error adding to fannypacks_table";
        pageMessage.results = err;
    } // if any else
    else {
        pageMessage.checked = "Internal_Error";
        pageMessage.message = "Internal Error";
        pageMessage.results = "Internal Error";
    }
    addFannyPackToFannyPacksTableResults.add_newFannyPack_to_fannypacks_table = pageMessage;
    callback(null, pageMessage);
  });
}
module.exports = add_newFannyPack_to_fannypacks_table;
