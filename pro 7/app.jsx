import React, { useEffect, useState } from 'react'

function App() {
  const [user,setUser]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUser(data))

  },[])

  
  return (
    <div>
      <h2>User Details</h2>
      <div>
        {user.map((Details)=>(
          <div key={user.id}>
          <p>{Details.name}</p>
          <p>{Details.email}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
