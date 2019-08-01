// App - GraphQL - Danzilla
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

// REST - AUTH and set_in_localStorage
const home = require('./src/router/home');
app.use('/', home); // Home
// End of REST Router

// GraphQL
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// 1 - GraphQL-Schema
// Construct a schema, using GraphQL schema language
const schemaBling = require('./src/graphql/schema')
const schema = buildSchema(schemaBling);
// 2 - GraphQL-RootValue
// The root provides a resolver function for each API endpoint
// Resolver == Actions? with Function()
const rootValueBling = require('./src/graphql/rootValue')
// 3 - Wicked
// Fire GraphQL
app.use('/graphql', bodyParser.json(), graphqlHTTP({
  schema: schema,
  rootValue: rootValueBling,
  graphiql: true,
}));
console.log(process.env.npm_package_name  + '- Running a GraphQL API server at localhost:5000/graphql');
// End of GraphQL

// Export
module.exports = app;
