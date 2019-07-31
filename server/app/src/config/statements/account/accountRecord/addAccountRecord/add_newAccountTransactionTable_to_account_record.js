/* SQL statementz - Account
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

    Create - Account
    - Requirement
        - > account_type_id, account_serial, account_lastmodify, account_owner_serial
    - Create Table
        - create fannypack_fannypacks_serial.account_serial_id
    - Add
        - Add newAccountTable to fannypack_fannypacks_serial.account_record_table

    create_table_new_account(userData)
    add_new_account_to_users_account_record_table(userData)
 */
 
// DB Labels || DB Connections
const db_config = require('../../../app.db');
const danzillaDB = require("../../../danzillaDB");
// pageMessage
let pageMessage = { title: "create_transactionTable_accountRecord", checked: "", message: "", results: "" };
// Create Table - create_table_account_category
// Function - Create Table - account_category
const add_new_account_to_users_account_record_table = function (callback, userData, create_account_results) {
    /*
        accounts_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
        account_type_id VARCHAR(36) NOT NULL,
        account_serial VARCHAR(36) NOT NULL,
        account_lastmodify TIMESTAMP,
        account_owner_serial VARCHAR(36) NOT NULL
    */
    // prepare Insert Data
    const accountAddData = [
        userData.account_type_id,
        userData.account_serial,
        userData.account_lastmodify,
        userData.account_owner_serial
    ];
    // Insert Query 
    let accountAddQuery = `INSERT INTO fannypack_${userData.userfannyPackSerial}.${db_config.database_labels.table_fannyPack_record}
                      (account_type_id, account_serial, account_lastmodify, account_owner_serial) VALUES($1, $2, $3, $4) RETURNING *;`;
    // SQL Query - Fire
    danzillaDB.pool.query(accountAddQuery, accountAddData,
        // err catch
        function (err, Results) {
            // If no errors and Results == Good
        if (!err && Results) { 
            pageMessage.checked = "checked";
            pageMessage.message = "New account_Table added!";
            pageMessage.results = Results;
        } // if any errors
        else if (err) {
            pageMessage.checked = err.code;
            pageMessage.message = "Error adding account_Table";
            pageMessage.results = err;
        } // if any else
        else {
            pageMessage.checked = "Internal_Error";
            pageMessage.message = "Internal Error";
            pageMessage.results = "Internal Error";
        }
        create_account_results.add_new_account_to_users_account_record_table = pageMessage;
        callback(null, pageMessage);
    });
}
module.exports = add_new_account_to_users_account_record_table;

