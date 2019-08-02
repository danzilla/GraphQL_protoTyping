// GraphQL
// buildSchema
const { buildSchema } = require('graphql');
// 1
// GraphQL - Schema
// Construct a schema, using GraphQL schema language
const schemaBling = `
  type Query {
    random: Float!
    hello: String,
    rollDice(numDice: Int!, numSides: Int): [Int],
    realRandom(num: String!): [String]
  }
`;
// GraphQL - Schema 
const schema = buildSchema(schemaBling);
// Export
module.exports = schema;
