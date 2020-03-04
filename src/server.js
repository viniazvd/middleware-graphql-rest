import fastify from 'fastify'
import mongoose from 'mongoose'

const { DB_USER, DB_HOST, DB_PORT, DB_NAME } = process.env

// connect to the database
mongoose
	.connect(`mongodb://${DB_USER}:${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err))

// export fastify instance
export default fastify({ logger: true })

