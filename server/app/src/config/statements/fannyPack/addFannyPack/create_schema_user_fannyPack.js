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
let pageMessage = { title: "create_schema_fannyPack", checked: "", message: "", results: "" };
// Create Schema - create_schema_fannyPack
// Function - Insert user FannyPack to FannyPack record
const create_schema_fannyPack = function(callback, userData, createSchemaFannyPackResult) {
  // name = "fanny-"userSerial + fannySerial
  let sql_statement = `CREATE SCHEMA IF NOT EXISTS fannyPack_${userData.fannyPackSerial} AUTHORIZATION ${db_config.database_connection.user};`;
  // blaze
  danzillaDB.pool.query(sql_statement, 
    function (err, Results) {
        // If no errors and Results == Good
      if (!err && Results) {
        pageMessage.checked = "checked";
        pageMessage.message = "FannyPack Added! " + JSON.stringify(Results);
        pageMessage.results = Results;
      }  // if record exists
      else if (err.code == "23505") {
        pageMessage.checked = err.code;
        pageMessage.message = "Fanny already exists";
        pageMessage.results = err;
      }  // No database exists
      else if (err.code == "3D000") {
        pageMessage.checked = err.code;
        pageMessage.message = "No database exist";
        pageMessage.results = err;
      }  // if No Tables exists
      else if (err.code == "42P01") {
        pageMessage.checked = err.code;
        pageMessage.message = "No Tables exists or Messy database";
        pageMessage.results = err;
      }  // if err 
      else if (err) {
        pageMessage.checked = err.code;
        pageMessage.message = "Error: " + JSON.stringify(err);
        pageMessage.results = err;
      }  // if any else
      else {
        pageMessage.checked = "Internal_Error";
        pageMessage.message = "Internal Error";
        pageMessage.results = "Internal Error";
      }
      createSchemaFannyPackResult.create_schema_fannyPack = pageMessage;
      callback(null, pageMessage);
  });
}
module.exports = create_schema_fannyPack;
