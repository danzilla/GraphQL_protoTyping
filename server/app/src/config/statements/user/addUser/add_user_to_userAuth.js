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
    Create - User
    - Requirement
        - > User, Password, fannyPackName
    - userAdd
        - Add user to users_assets.user_auth_table
        - Add user to users_assets.user_details_table
    - Create FannyPack(userData)

add_user_to_userAuth(userData)
add_user_to_userDetails(userData)
*/
// DB Labels
const db_config = require('../../app.db');
// DB Connections
const danzillaDB = require("../../danzillaDB");
// pageMessage
let pageMessage = { title: "add_user_to_userAuth", checked: "", message: "", results: "" };
// User Auth
// Function - Insert user to userAuth Table
const add_user_to_userAuth = function (callback, userData, addUserAuthResult) {
  `
    user_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    user_serial VARCHAR(36) UNIQUE NOT NULL,
    user_name VARCHAR(12) UNIQUE NOT NULL,
    user_pwd_salt VARCHAR(254) NOT NULL,
    user_pwd_hash VARCHAR(254) NOT NULL,
    user_auth_token VARCHAR(36)
  `
  // Insert Query 
  let userAddQuery = `INSERT INTO ${db_config.database_labels.schema_name}.${db_config.database_labels.table_users_auth}
                      (user_serial, user_name, user_pwd_salt, user_pwd_hash) VALUES($1, $2, $3, $4) RETURNING *;`;
  // prepare Insert Data
  const userAddData = [ 
    userData.userSerial,
    userData.userName,
    userData.userPwdSalt,
    userData.userPwdHash
  ];
  // blaze
  danzillaDB.pool.query(userAddQuery, userAddData, 
    function (err, Results) {
        // If no errors and Results == Good
      if (!err && Results) {
        pageMessage.checked = "checked";
        pageMessage.message = "User Added! " + Results.rows[0].user_name;
        pageMessage.results = Results.rows[0];
      }  // if record exists
      else if (err.code == "23505") {
        pageMessage.checked = err.code;
        pageMessage.message = "User alredy exists";
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
      addUserAuthResult.add_user_to_userAuth = pageMessage;
      callback(null, pageMessage);
  });
}
module.exports = add_user_to_userAuth;