// GraphQl = schema

const schema = `
  type Query {
    random: Float!
    hello: String,
    rollDice(numDice: Int!, numSides: Int): [Int],
    realRandom(num: String!): [String]
  }
`;
module.exports = schema;
