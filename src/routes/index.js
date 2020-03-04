import { getUsers, getSingleUser } from '../services/user'

const routes = [
  {
    method: 'GET',
    url: '/api/users',
    handler: getUsers
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: getSingleUser
  }
]

export default routes
