// Import External Dependancies
import graphql from 'graphql'

// Import https to make requests
import https from 'https'

// Import User Type
import UserType from './types'

// Destructure GraphQL functions
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql

// https options
const options = {
  hostname: process.env.BASE_URL,
  port: 3000,
  path: '/api/user',
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}

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
        https.request(options, resp => {
          console.log(`statusCode: ${res.statusCode}`)

          // A chunk of data has been recieved.
          resp.on('data', data => console.log({ args, data }))

          // The whole response has been received. Print out the result.
          resp.on('end', data => console.log({ end: JSON.parse(data).explanation }))
        })
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