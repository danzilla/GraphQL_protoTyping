/* SQL statementz - Create user
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
    Login
    - Requirement
        - > User, Password
    - Validate user to user_auth
        - Validate user to users_assets.user_auth_table
    - Add userData to user_details_table
        - Add user to users_assets.user_details_table

validate_user_auth(userData)
update_user_userDetails(userData)
*/
// DB Labels
const db_config = require('../../app.db');
// DB Connections
const danzillaDB = require("../../danzillaDB");
// pageMessage
let pageMessage = { title: "update_user_userDetails", checked: "", message: "", results: "" };
// User Auth
// Function - Insert user to userAuth Table
const update_user_userDetails = function (callback, userData, login_validation_results) {
  `
    user_details_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    user_full_name VARCHAR(254),
    user_email VARCHAR(254),
    user_created TIMESTAMP,
    user_modify TIMESTAMP,
    user_lastLogged TIMESTAMP,
    user_auth_serial VARCHAR(36) UNIQUE NOT NULL
  `
  let update_user_login_query =  `UPDATE ${db_config.database_labels.schema_name}.${db_config.database_labels.table_users_details}
                                  SET user_lastLogged='${userData.userLastLogged}' 
                                  WHERE user_auth_serial='${userData.userSerial}';`;
    // blaze
    danzillaDB.pool.query(update_user_login_query,
      function (err, Results) {
        if (!err && Results.rowCount === 1) { // If no errors and Results == Good
          pageMessage.checked = "checked";
          pageMessage.message = "Record updated!";
          pageMessage.results = Results;
        } else if (!err && Results.rowCount === 0) { // If no errors and Results == Good
          pageMessage.checked = "";
          pageMessage.message = "Record not been updated";
          pageMessage.results = Results;
        } else if (err) { // if any errors
          pageMessage.checked = err.code;
          pageMessage.message = "Error updating record!";
          pageMessage.results = err;
        }
        login_validation_results.update_user_userDetails = pageMessage;
        callback(null, pageMessage);
    });
}
module.exports = update_user_userDetails;