/*  Account Type

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

fanny_serialFanny.category - Table
  `
    account_type_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    account_type_name VARCHAR(254) UNIQUE NOT NULL,
    account_type_created TIMESTAMP,
    account_type_lastmodify TIMESTAMP
  `
*/
// Import app config labels
const {database_labels, database_connection} = require('../app.config');
// Magic
// Table_account_type
const create_accounType_Table = {
  title: "create_Table_UserAuth",
  sql: function (userData) {
      return `CREATE TABLE IF NOT EXISTS
        ${userData.fannyPackName}.accountType
        (
          account_type_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
          account_type_name VARCHAR(254) UNIQUE NOT NULL,
          account_type_created TIMESTAMP,
          account_type_lastmodify TIMESTAMP
        );`;
  }
}
// Export 
const statements = {
  create_accounType_Table: create_accounType_Table
}
module.exports = statements;
