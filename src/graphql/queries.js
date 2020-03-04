// Import External Dependancies
import graphql from 'graphql'

// Import User Type
import UserType from './types'

// Destructure GraphQL functions
const { GraphQLObjectType, GraphQLID, GraphQLList, } = graphql

// Import Controllers
import userService from '../services/user'

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

export default Query