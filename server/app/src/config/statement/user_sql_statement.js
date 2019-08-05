/*  User

   Database - blingblaw
   └───Schema - users
    | │ Table - user_auth
    | │ Table - user_details
    │ │ Table - fannypacks
    └───Schema - fannypacks_fanny_serial
    | │ Table - account_category
    │ │ Table - account_type 
    │ │ Table - account_record
    │ │ Table - account_account_serial

    create_schema_user_fannyPack
    add_user_to_userAuth
    add_user_to_userDetails
     
user_auth
  `
    user_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    user_serial VARCHAR(36) UNIQUE NOT NULL,
    user_name VARCHAR(12) UNIQUE NOT NULL,
    user_pwd_salt VARCHAR(254) NOT NULL,
    user_pwd_hash VARCHAR(254) NOT NULL,
    user_auth_token VARCHAR(36)
  `
user_details
  `
    user_details_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    user_full_name VARCHAR(254),
    user_email VARCHAR(254),
    user_created TIMESTAMP,
    user_modify TIMESTAMP,
    user_lastLogged TIMESTAMP,
    user_auth_serial VARCHAR(36) UNIQUE NOT NULL
  `
*/

// Import app config labels
const {database_labels, database_connection} = require('../app.config');

// Magic

// Table - userAuth
const create_Table_UserAuth = {
  title: "create_Table_UserAuth",
  sql: `CREATE TABLE IF NOT EXISTS
      ${database_labels.schema_name}.${database_labels.table_users_auth}
      (
          user_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
          user_serial VARCHAR(36) UNIQUE NOT NULL,
          user_name VARCHAR(12) UNIQUE NOT NULL,
          user_pwd_salt VARCHAR(254) NOT NULL,
          user_pwd_hash VARCHAR(254) NOT NULL,
          user_auth_token VARCHAR(36)
      );`
}
// Table - userDetails
const create_Table_UserDetails = {
  title: "create_Table_UserDetails",
  sql: `CREATE TABLE IF NOT EXISTS 
      ${database_labels.schema_name}.${database_labels.table_users_details}
      (
          user_details_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
          user_full_name VARCHAR(254),
          user_email VARCHAR(254),
          user_created TIMESTAMP,
          user_modify TIMESTAMP,
          user_lastLogged TIMESTAMP,
          user_auth_serial VARCHAR(36) UNIQUE NOT NULL
      );`
}

// Add
// Require - userData
const add_user_to_userAuth = {
    title: "add_user_to_userAuth",
    sql: `INSERT INTO ${database_labels.schema_name}.${database_labels.table_users_auth}
        (user_serial, user_name, user_pwd_salt, user_pwd_hash) VALUES($1, $2, $3, $4) RETURNING *;`
}
// Require - userData
const add_user_to_userDetails = {
    title: "add_user_to_userDetails",
    sql: `INSERT INTO ${database_labels.schema_name}.${database_labels.table_users_details}
        (user_created, user_auth_serial) VALUES($1, $2) RETURNING *;`
}

// Export 
const statements = {
  create_Table_UserAuth: create_Table_UserAuth,
  create_Table_UserDetails: create_Table_UserDetails,
  add_user_to_userAuth: add_user_to_userAuth,
  add_user_to_userDetails: add_user_to_userDetails
}
module.exports = statements;
