// Import External Dependancies
import graphql from 'graphql'
import query from './queries'
import mutation from './mutations'

// Destructure GraphQL functions
const { GraphQLSchema } = graphql

// Export the schema
export default new GraphQLSchema({ query, mutation })
