// App - BlingBlaw - Danzilla
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dev - logs
const logger = require('morgan');
app.use(logger('dev'));
app.locals.pretty = true;

// Cors - Cross-Origin Resource Sharing
const cors = require('cors')
app.use(cors());

// BodyParser - req.body and Strip to JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REST
// Authentication and FirstRun
const home = require('./src/router/home');
app.use('/auth', home); // Home
const firstrun = require('./src/router/firstrun');
app.use('/firstrun', firstrun); // firstrun
// End of REST Router

// GraphQL 
// Data driven - #Eeeeee
// 1
// GraphQL - Schema
// Construct a schema, using GraphQL schema language
const schemaBling = require('./src/graphql/schema');
// 2
// GraphQL - RootValue
// The root provides a resolver function for each API endpoint
// Resolver == Actions? with Function()
const rootValueBling = require('./src/graphql/rootValue')
// 3 -  GraphQL
// Wicked
// Fire GraphQL
// Express-graphql
const graphqlHTTP = require('express-graphql');
app.use('/graphql', 
  bodyParser.json(), 
  graphqlHTTP({
    schema: schemaBling,
    rootValue: rootValueBling,
    graphiql: true,
}));
console.log(process.env.npm_package_name  + '- Running a GraphQL API server at localhost:5000/graphql');
// End of GraphQL


// Export Blazzze
module.exports = app;
