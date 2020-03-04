// Import External Dependancies
const graphql = require('graphql')

// Destructure GraphQL functions
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

// Define Object Types
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		_id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString }
	})
})

module.exports = UserType