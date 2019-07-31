const express = require('express')
const cors = require('cors')
const Pool = require('pg-pool');

const app = express()
app.use(cors())

// Databases 
const databases = require('./app.db');

// App - blingBlaw
// init - DB connection
const pool = new Pool(databases.blingblaw)
pool.on('error', (err, client) => {
  console.error("Unexpected error on idle client", err)
  process.exit(-1)
})

// Default - postgres - public
// init - DB connection
const postgresDefault = new Pool(databases.default_postgres_db)
postgresDefault.on('error', (err, client) => {
  console.error("Unexpected error on idle client", err)
  process.exit(-1)
})

// Export databases
module.exports.pool = pool;
module.exports.postgresDefault = postgresDefault;