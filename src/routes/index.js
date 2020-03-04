import { getUsers, getSingleUser, addUser, updateUser, deleteUser } from '../services/user'

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
  },
  {
    method: 'POST',
    url: '/api/user',
    handler: addUser
  },
  {
    method: 'PUT',
    url: '/api/user/:id',
    handler: updateUser
  },
  {
    method: 'DELETE',
    url: '/api/user/:id',
    handler: deleteUser
  }
]

export default routes
