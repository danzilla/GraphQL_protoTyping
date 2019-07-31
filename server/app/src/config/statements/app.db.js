// Databases - labels
// App Database configuration - Labels
// App Primary_DB Labels 
const db_config = {
    database_labels: {
        db_name: "blingblaw_assets",
        schema_name: "users",
        table_users_auth: "user_auth",
        table_users_details: "user_details",
        table_users_fannyPack: "user_fannyPackz",
        table_fannyPack_category: "account_category",
        table_fannyPack_type: "account_type",
        table_fannyPack_record: "account_record"
    },
    database_connection: {
        user: "danzilla",
        pwd: "1035621",
        port: "5432",
        defaultDB: "public"
    },
    database_host_dev_prod: {
        dev: "0.0.0.0",
        prod: "postgres_db"
    }
}
// If Docker - SET (PROD) - db_config.database_host_dev_prod.prod
// If Local and Development - SET (DEV) - db_config.database_host_dev_prod.dev
// Dev environment for docker_compose and npm
const db_Host = db_config.database_host_dev_prod.dev;
// Databases settings and configurations
const database = {
    // App - Assets
    blingblaw: {
        user: db_config.database_connection.user,
        password: db_config.database_connection.pwd,
        database: db_config.database_labels.db_name,
        port: db_config.database_connection.port,
        host: db_Host
    },
    // App - default postgres (public)
    default_postgres_db: {
        user: db_config.database_connection.user,
        password: db_config.database_connection.pwd,
        database: db_config.database_connection.defaultDB,
        port: db_config.database_connection.port,
        host: db_Host
    }
}
// Export Database config settings
module.exports = db_config;
// Export Database connection settings
module.exports.blingblaw = database.blingblaw;
module.exports.default_postgres_db = database.default_postgres_db;