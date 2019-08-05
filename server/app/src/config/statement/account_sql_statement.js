/*  - Account - Transaction
  
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

fanny_serialFanny.accountTransaction
  `
    transaction_Id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    transaction_serial VARCHAR(36) NOT NULL UNIQUE,
    transaction_Date DATE NOT NULL,
    transaction_Desc VARCHAR(254) NOT NULL,
    transaction_Withdrawls VARCHAR(254) NOT NULL,
    transaction_Deposits VARCHAR(254) NOT NULL,
    transaction_Balance VARCHAR(254) NOT NULL,
    transaction_Category text[],
    transaction_Comments text[],
    transaction_Updated text[],
    transaction_UpdateUser VARCHAR(254)
  `
*/
// Import app config labels
const {database_labels, database_connection} = require('../app.config');
// Magic
// create_accountTransaction_table
const create_accountTransaction_table = {
  title: "create_accountTransaction_table",
  sql: function (userData) {
      return `CREATE TABLE IF NOT EXISTS
        ${userData.fannyPackName}.accounTransaction
        (
          transaction_Id SERIAL PRIMARY KEY NOT NULL UNIQUE,
          transaction_serial VARCHAR(36) NOT NULL UNIQUE,
          transaction_Date DATE NOT NULL,
          transaction_Desc VARCHAR(254) NOT NULL,
          transaction_Withdrawls VARCHAR(254) NOT NULL,
          transaction_Deposits VARCHAR(254) NOT NULL,
          transaction_Balance VARCHAR(254) NOT NULL,
          transaction_Category text[],
          transaction_Comments text[],
          transaction_Updated text[],
          transaction_UpdateUser VARCHAR(254)
        );`;
  }
}
// Export 
const statements = {
  create_accountTransaction_table: create_accountTransaction_table
}
module.exports = statements;
