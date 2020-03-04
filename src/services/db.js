// Require external modules
const mongoose = require('mongoose')

const { DB_USER, DB_HOST, DB_PORT, DB_NAME } = process.env

// Connect to DB
mongoose
	.connect(`mongodb://${DB_USER}:${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err))
