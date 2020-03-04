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
export const getSingleUser = (req) => {
	try {
    const id = !req.params ? req.id : req.params.id

		return User.findById(id)
	} catch (err) {
		throw boom.boomify(err)
	}
}

export default { getUsers, getSingleUser }