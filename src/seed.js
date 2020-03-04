// Import external dependancies
const faker = require('faker')
const boom = require('boom')

// Import internal dependancies
const fastify = require('./server.js')

// Fake data
const cars = [
	{
		name: 'Tesla',
		models: ['S', 'E', 'X', 'Y']
	},
	{
		name: 'Mercedes',
		models: ['GLA', 'GLC', 'GLE', 'GLS']
	},
	{
		name: 'BMW',
		models: ['X4', 'Z3', 'M2', '7']
	},
	{
		name: 'Audi',
		models: ['A1', 'A3', 'A4', 'A5']
	},
	{
		name: 'Ford',
		models: ['Fiesta', 'Focus', 'Fusion', 'Mustang']
	}
]

// Get Data Models
const Car = require('./models/Car')

const generateCarData = ownersIds => {
	let carData = []
	let i = 0

	while (i < 1000) {
		const owner_id = faker.random.arrayElement(ownersIds)
		const carObject = faker.random.arrayElement(cars)
		const title = faker.random.arrayElement(carObject.models)
		const price = faker.random.number({ min: 5000, max: 30000 })
		const age = faker.random.number({ min: 2, max: 10 })

		const car = {
			owner_id,
			brand: carObject.name,
			title,
			price,
			age
		}

		carData.push(car)
		i++
	}

	return carData
}

fastify.ready().then(
	async () => {
		try {
			const cars = await Car.insertMany(generateCarData(ownersIds))

			console.log(`Data successfully added:
        - ${cars.length} cars added.
      `)
		} catch (err) {
			throw boom.boomify(err)
		}
		process.exit()
	},
	err => {
		console.log('An error occured: ', err)
		process.exit()
	}
)
