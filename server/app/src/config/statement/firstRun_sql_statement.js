// First Run
/*
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

// Export 
const statements = {
    kill_connection: kill_connection,
    drop_app_Database: drop_app_Database,
    create_app_Database: create_app_Database,
    create_app_Schema: create_app_Schema
}
module.exports = statements;
