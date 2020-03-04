// Import External Dependancies
const graphql = require('graphql')
const query = require('./queries')
const mutation = require('./mutations')

// Destructure GraphQL functions
const { GraphQLSchema } = graphql

// Export the schema
module.exports = new GraphQLSchema({ query, mutation })
