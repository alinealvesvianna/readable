const api = 'http://localhost:3001'


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8)

const headers = {
  Accept: 'application/json',
  Authorization: token
}

// export const get = () =>
//   fetch(`${api}/categories`, { headers })
//     .then(res => res.json())
//     .then(data => console.log(data))

export const get = id =>
fetch(`${api}/comments/get/${id}`, { headers })
  .then(res => console.log(res))
//   .then(data => console.log(data))