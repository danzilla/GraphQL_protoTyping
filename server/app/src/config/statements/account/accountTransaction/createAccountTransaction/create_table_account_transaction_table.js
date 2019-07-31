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
// DB Connections
const danzillaDB = require("../../../danzillaDB");
// pageMessage
let pageMessage = { title: "create_account_table", checked: "", message: "", results: "" };
// FannyPack Record
// Function - Insert user FannyPack to FannyPack record
const create_accountTransaction_table = function (callback, userData, create_account_results) {
    // Create Table - create_Category_Table
    let sql_statement = "CREATE TABLE IF NOT EXISTS " +
        `fannypack_${userData.userfannyPackSerial}` + "." + `account_${userData.account_serial}` +
        `(
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
  // Query
  danzillaDB.pool.query(sql_statement,
    // err catch
    function (err, Results) {
        // If no errors and Results == Good
    if (!err && Results) { 
        pageMessage.checked = "checked";
        pageMessage.message = "Account been created!";
        pageMessage.results = Results.rows;
    } // if any errors
    else if (err) {
        pageMessage.checked = err.code;
        pageMessage.message = "Error creating Account";
        pageMessage.results = err;
    } // if any else
    else {
        pageMessage.checked = "Internal_Error";
        pageMessage.message = "Internal Error";
        pageMessage.results = "Internal Error";
    }
    create_account_results.create_table_new_account = pageMessage;
    callback(null, pageMessage)
  });
}
module.exports = create_accountTransaction_table;

