import React, { useEffect, useState } from 'react'

export const User = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch((error) => setError(error.message))
  }, [])
  return (
    <div>
      <h1>User</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}
