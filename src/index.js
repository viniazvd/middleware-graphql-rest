// start dotenv
import 'dotenv/config'

// Start MongoDB
import './services/db'

// Require the fastify framework and instantiate it
import fst from 'fastify'

// Import CORS
import cors from 'fastify-cors'

const fastify = fst({ logger: true })

// Import external dependancies
import gql from 'fastify-gql'

// Import GraphQL Schema
import schema from './graphql'

// Register Fastify GraphQL
fastify.register(gql, { schema, graphiql: true })

// Register Fastify CORS
fastify.register(cors)

// Import Routes
import routes from './routes'

// Loop over each route
routes.forEach(route => { fastify.route(route) })

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

export default fastify
