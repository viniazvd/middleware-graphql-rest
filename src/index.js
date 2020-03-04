// start dotenv
import 'dotenv/config'

// Start MongoDB
require('./services/db')

// Require the fastify framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Import external dependancies
import gql from 'fastify-gql'

// Import GraphQL Schema
const schema = require('./graphql')

// Register Fastify GraphQL
fastify.register(gql, { schema, graphiql: true })

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
