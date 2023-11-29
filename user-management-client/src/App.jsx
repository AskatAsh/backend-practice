import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })

  const handleSubmit = e => {
    e.preventDefault();
    const userInfo = e.target;
    const name = userInfo.name.value;
    const email = userInfo.email.value;
    const user = {name, email};
    // console.log(user);
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
    .then(data => {
      const newUser = [...users, data];
      setUsers(newUser);
    })
  }

  return (
    <>
      
      <h1>User Management System</h1>
      <p>Users Present: {users.length}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">User name</label>
        <br />
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">User email</label>
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id}. {user.name} - {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
