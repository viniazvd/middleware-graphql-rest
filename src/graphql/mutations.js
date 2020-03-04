// Import External Dependancies
const graphql = require('graphql')

// Import User Type
const UserType = require('./types')

// Destructure GraphQL functions
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql

// Define Mutations
const Mutations = new GraphQLObjectType({
	name: 'Mutations',
	fields: {
		addUser: {
			type: UserType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) }
			},
			async resolve(_, args) {
        // rest
			}
		},
		editUser: {
			type: UserType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) }
			},
			async resolve(_, args) {
        // rest
			}
		},
		deleteUser: {
			type: UserType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) }
			},
			async resolve(_, args) {
        // rest
			}
		}
	}
})

module.exports = Mutations