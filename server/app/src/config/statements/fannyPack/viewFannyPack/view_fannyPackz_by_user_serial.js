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
    View - User FannyPack
    - Requirement
        - > userSerialID
    - View
        - View FannyPack_info FROM users_assets.fannypacks_table

view_fannyPackz_by_user_serial(userData)
*/
// DB Labels
const db_config = require('../../app.db');
// DB Connections
const danzillaDB = require("../../danzillaDB");
// pageMessage
let pageMessage = { title: "view_fannyPackz_by_user_serial", checked: "", message: "", results: "" };
// FannyPack Record
// Function - Insert user FannyPack to FannyPack record
const view_fannyPackz_by_user_serial = function (callback, userData, viewFannyPackResults) {
  `
    fannyPack_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    fannyPack_serial VARCHAR(36) UNIQUE NOT NULL,
    fannyPack_name VARCHAR(254),
    fannyPack_created TIMESTAMP,
    fannyPack_lastUpdated TIMESTAMP,
    fannyPack_owner_serial VARCHAR(36) UNIQUE NOT NULL
  `
  console.log(JSON.stringify(userData));
  
  let sql_statement = `SELECT * FROM 
                        ${db_config.database_labels.schema_name}.${db_config.database_labels.table_users_fannyPack}
                      WHERE fannyPack_owner_serial='${userData.userSerial}';`;
  // Query
  danzillaDB.pool.query(sql_statement,
    // err catch
    function (err, Results) {
        // If no errors and Results == Good
    if (!err && Results) { 
        pageMessage.checked = "checked";
        pageMessage.message = "FannyPack loaded for user: ";
        pageMessage.results = Results.rows;
    } // if any errors
    else if (err) {
        pageMessage.checked = err.code;
        pageMessage.message = "Error Loading fannyPacks";
        pageMessage.results = err;
    } // if any else
    else {
        pageMessage.checked = "Internal_Error";
        pageMessage.message = "Internal Error";
        pageMessage.results = "Internal Error";
    }
    viewFannyPackResults.view_fannyPackz_by_user_serial = pageMessage;
    callback(null, pageMessage)
  });
}
module.exports = view_fannyPackz_by_user_serial;
