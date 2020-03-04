// start dotenv
import 'dotenv/config'

// Import Server
import fastify from './server.js'

// Import external dependancies
import gql from 'fastify-gql'

// Import GraphQL Schema
import schema from './schema'

// Register Fastify GraphQL
fastify.register(gql, {
	schema,
	graphiql: true
})

// Import Routes
import routes from './routes'

// Loop over each route
routes.forEach((route, index) => {
	fastify.route(route)
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(3000, '0.0.0.0')
		fastify.log.info(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
