// Databases - labels
// App Database configuration - Labels
// App Primary_DB Labels

/*
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
 */

const database_labels = {
    db_name: "blingblaw_assets",
    schema_name: "users",
    table_users_auth: "user_auth",
    table_users_details: "user_details",
    table_users_fannyPack: "user_fannyPackz",
    table_fannyPack_category: "account_category",
    table_fannyPack_type: "account_type",
    table_fannyPack_record: "account_record"
}
const database_connection = {
    user: "danzilla",
    pwd: "1035621",
    port: "5432",
    defaultDB: "public"
}

// If Docker - SET (PROD) - db_config.database_host_dev_prod.prod
// If Local and Development - SET (DEV) - db_config.database_host_dev_prod.dev
// Dev environment for docker_compose and npm
const database_host_dev_prod = {
    dev: "0.0.0.0",
    prod: "postgres_db"
}
const db_Host = database_host_dev_prod.dev;

// Pg connection for | BlingBlaw and public database
// Databases settings and configurations
const database = {
    // App - Assets
    blingblaw: {
        user: database_connection.user,
        password: database_connection.pwd,
        database: database_labels.db_name,
        port: database_connection.port,
        host: db_Host,
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000
    },
    // App - default postgres (public)
    default_postgres_db: {
        user: database_connection.user,
        password: database_connection.pwd,
        database: database_connection.defaultDB,
        port: database_connection.port,
        host: db_Host,
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000
    }
}

    // PostGres connection
    const { Pool } = require('pg');
    // App - blingBlaw
    // init - DB connection
    const blingblaw = new Pool(database.blingblaw)
    blingblaw.on('error', (err, client) => {
        console.error("Unexpected error on idle client", err)
        process.exit(-1)
    });
    // Default - postgres - public
    // init - DB connection
    const postgresDefault = new Pool(database.default_postgres_db)
    postgresDefault.on('error', (err, client) => {
        console.error("Unexpected error on idle client", err)
        process.exit(-1)
    });

const app_config = {
    database_labels: database_labels,
    database_connection: database_connection,
    blingblaw: blingblaw,
    postgresDefault: postgresDefault
}
// Export Database config settings
module.exports = app_config;