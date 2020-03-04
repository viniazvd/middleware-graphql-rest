const userService = require('../services/user')

const routes = [
  {
    method: 'GET',
    url: '/api/users',
    handler: userService.getUsers
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: userService.getSingleUser
  }
]

module.exports = routes
