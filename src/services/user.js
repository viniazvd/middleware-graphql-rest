import User from '../models/User'

// Get all users
export const getUsers = () => {
	try {
	  return User.find()
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single user by ID
export const getSingleUser = req => {
	try {
    const id = req.id || req.params.id

		return User.findById(id)
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Add a new user
export const addUser = req => {
	try {
    console.log({ addUser: req })

		return { data: req }
	} catch (err) {
    console.log({ error: 'addUser' })
		throw boom.boomify(err)
	}
}

// Update an existing user
export const updateUser = req => {
	try {
    console.log({ updateUser: req })

		return { data: req }
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Delete a user
export const deleteUser = req => {
	try {
    console.log({ deleteUser: req })

		return req
	} catch (err) {
		throw boom.boomify(err)
	}
}