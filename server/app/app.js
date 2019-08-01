// App - BlingBlaw - Danzilla
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors - Cross-Origin Resource Sharing
const cors = require('cors')
app.use(cors());

// Dev - logs
const logger = require('morgan');
app.use(logger('dev'));
app.locals.pretty = true;

// BodyParser - req.body and Strip to JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* REST - AUTH and set_in_localStorage */
const home = require('./src/router/home');
app.use('/', home); // Home

/* GraphQL */
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// 1 - GraphQL-Schema
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    random: Float!
    hello: String,
    rollDice(numDice: Int!, numSides: Int): [Int],
    realRandom(num: String!): [String]
  }
`);
// 2 - GraphQL-Schema
// The root provides a resolver function for each API endpoint
// Resolver == Actions? with Function()
let pageMesage = "";
const rootValue = {
  hello: () => {
    pageMesage = "Hello world";
    return pageMesage;
  },
  random: () => {
    pageMesage = Math.random();
    return pageMesage;
  },
  rollDice: function ({numDice, numSides}) {
    let output = [];
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  realRandom: function ({num}) {
    let output = [];
    for (let i = 0; i < num; i++) {
      output.push(i + " lol")
    }
    return output;
  }
};

// 3 - Wicked
app.use('/graphql', bodyParser.json(), graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true,
}));
console.log(process.env.npm_package_name  + '- Running a GraphQL API server at localhost:5000/graphql');

/* End of GraphQL */

// Export
module.exports = app;
