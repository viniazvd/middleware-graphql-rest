// Import External Dependancies
import graphql from 'graphql'

// Import axios client to make requests
import http from '../services/http'

// Import User Type
import UserType from './types'

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
			resolve(_, args) {
        http.post('/user', { args })
          .then(resonse => { console.log({ response }) })
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

export default Mutations