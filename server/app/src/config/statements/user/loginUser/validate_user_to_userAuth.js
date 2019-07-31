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
let pageMessage = { title: "Validate_user_auth", checked: "", message: "", results: "" };
// User Auth
// Function - Insert user to userAuth Table
const validate_user_auth = function (callback, userData, login_validation_results) {
 `Table - user_auth
    user_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    user_serial VARCHAR(36) UNIQUE NOT NULL,
    user_name VARCHAR(12) UNIQUE NOT NULL,
    user_pwd_salt VARCHAR(254) NOT NULL,
    user_pwd_hash VARCHAR(254) NOT NULL,
    user_auth_token VARCHAR(36)
  Table - user_details
    user_details_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    user_full_name VARCHAR(254),
    user_email VARCHAR(254),
    user_created TIMESTAMP,
    user_modify TIMESTAMP,
    user_lastLogged TIMESTAMP,
    user_auth_serial VARCHAR(36) UNIQUE NOT NULL
  `
  // SELECT query 
  let sql_loginQuery = `SELECT 
                    user_serial, user_name, user_full_name, user_email, user_lastlogged, user_auth_token
                    FROM ${db_config.database_labels.schema_name}.${db_config.database_labels.table_users_auth} userAuth
                    LEFT JOIN ${db_config.database_labels.schema_name}.${db_config.database_labels.table_users_details} userDetail 
                    ON userAuth.user_serial = userDetail.user_auth_serial
                    WHERE userAuth.user_name=$1 AND userAuth.user_pwd_hash=$2 LIMIT 1;`;
  // NEED TO Validate and Optimize 
  let loginPayLoad = [
    userData.userName,
    userData.password
  ]
  // blaze
  danzillaDB.pool.query(sql_loginQuery, loginPayLoad, 
    function (err, Results) {
          // If no errors and Results == Good
      if (!err && Results.rowCount === 1 && Results.rows[0].user_serial) { 
        pageMessage.checked = "checked";
        pageMessage.message = "User logged in! " + Results.rows[0].user_name;
        pageMessage.results = Results.rows[0];
      }  // If 0 records
      else if (!err && Results.rowCount === 0) {
        pageMessage.checked = "";
        pageMessage.message = "Incorrect credentials";
        pageMessage.results = Results;
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
        pageMessage.message = "Err: " + JSON.stringify(err);
        pageMessage.results = err;
      }  // if any else
      else {
        pageMessage.checked = "Internal_Error";
        pageMessage.message = "Internal Error";
        pageMessage.results = "Internal Error";
      }
      login_validation_results.validate_user_auth = pageMessage;
      callback(null, pageMessage);
    });
}
module.exports = validate_user_auth;