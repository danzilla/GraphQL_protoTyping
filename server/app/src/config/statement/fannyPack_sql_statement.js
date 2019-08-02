/* Fannypack

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

    add_newFannyPack_to_fannypacks_table
     
fannyPack
  `
    fannyPack_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    fannyPack_serial VARCHAR(36) UNIQUE NOT NULL,
    fannyPack_name VARCHAR(254),
    fannyPack_created TIMESTAMP,
    fannyPack_lastUpdated TIMESTAMP,
    fannyPack_owner_serial VARCHAR(36) NOT NULL
  `
*/
// Import app config labels
const {database_labels, database_connection} = require('../app.config');
// Magic
const add_newFannyPack_to_fannypacks_table = {
    title: "add_newFannyPack_to_fannypacks_table",
    sql: `INSERT INTO ${database_labels.schema_name}.${database_labels.table_users_details}
        (user_created, user_auth_serial) VALUES($1, $2) RETURNING *;`
}  
// Export 
const statements = {
    add_newFannyPack_to_fannypacks_table: add_newFannyPack_to_fannypacks_table
}
module.exports = statements;
