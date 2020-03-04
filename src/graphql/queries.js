// Import External Dependancies
const graphql = require('graphql')

// Import User Type
const UserType = require('./types')

// Destructure GraphQL functions
const { GraphQLObjectType, GraphQLID, GraphQLList, } = graphql

// Import Controllers
const userService = require('../services/user')

// Define Query
const Query = new GraphQLObjectType({
  name: 'QueryType',

	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			async resolve (_, args) {
				return await userService.getSingleUser(args)
			}
    },

		users: {
			type: new GraphQLList(UserType),
			async resolve () {
				return await userService.getUsers()
			}
		}
	}
})

module.exports = Query