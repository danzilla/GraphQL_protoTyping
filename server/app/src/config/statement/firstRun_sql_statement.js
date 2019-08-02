/* First Run

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
     
	kill_connection
	drop_Database
	create_Database
    create_Schema
	create_Table_UserAuth
	create_Table_UserDetails
	create_Table_fannyPackz
*/
// Import app config labels
const {database_labels, database_connection} = require('../app.config');
// Magic
const kill_connection = {
    title: "kill_connection",
    sql: `SELECT *, pg_terminate_backend(pid)
            FROM pg_stat_activity 
            WHERE pid <> pg_backend_pid() AND datname=${database_labels.db_name};`
}
const drop_app_Database = {
    title: "drop_app_Database",
    sql: `DROP DATABASE ${database_labels.db_name};`
}
const create_app_Database = {
    title: "create_app_Database",
    sql: `CREATE DATABASE ${database_labels.db_name};`
}
const create_app_Schema = {
    title: "create_schema_fannyPack",
    sql: `CREATE SCHEMA IF NOT EXISTS ${database_labels.schema_name}  
        AUTHORIZATION ${database_connection.user};`
}
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
const create_Table_fannyPackz = {
    title: "create_Table_fannyPackz",
    sql: `CREATE TABLE IF NOT EXISTS 
        ${database_labels.schema_name}.${database_labels.table_users_fannyPack}
        (
            fannyPack_serial VARCHAR(36) UNIQUE NOT NULL,
            fannyPack_name VARCHAR(254),
            fannyPack_created TIMESTAMP,
            fannyPack_lastmodify TIMESTAMP,
            fannyPack_lastUpdated TIMESTAMP,
            fannyPack_owner_serial VARCHAR(36) NOT NULL
        );`
}
// Export 
const statements = {
    kill_connection: kill_connection,
    drop_app_Database: drop_app_Database,
    create_app_Database: create_app_Database,
    create_app_Schema: create_app_Schema,
    create_Table_fannyPackz: create_Table_UserAuth,
    create_Table_UserAuth: create_Table_UserDetails,
    create_Table_UserDetails: create_Table_fannyPackz
}
module.exports = statements;
