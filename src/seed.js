// start dotenv
import 'dotenv/config'

// Start MongoDB
import './services/db'

import fastify from './'

// Import external dependancies
import faker from 'faker'
import boom from 'boom'

// Get Data Models
import User from './models/User'

const generateUserData = () => {
  return Array.from({ length: 15 }, () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email()
    }
  })
}

async function generateUsers () {
  try {
    const users = await User.insertMany(generateUserData())

    console.log(`Data successfully added: ${users.length} users added.`)
  } catch (err) {
    throw boom.boomify(err)
  }
}

fastify.ready().then(generateUsers)
