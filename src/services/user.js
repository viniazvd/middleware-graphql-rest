const User = require('../models/User')

// Get all users
exports.getUsers = () => {
	try {
	  return User.find()
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single user by ID
exports.getSingleUser = (req) => {
	try {
    const id = !req.params ? req.id : req.params.id

		return User.findById(id)
	} catch (err) {
		throw boom.boomify(err)
	}
}