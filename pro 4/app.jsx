import React, { useState } from 'react'

function App() {
  const [Color,setcolor]=useState("white")
  return (
    <div>App
      <h1>Color picker</h1>
      <button onClick={()=>setcolor("red")}>Red</button>
      <button onClick={()=>setcolor("green")}>Green</button>
      <button onClick={()=>setcolor("blue")}>Blue</button>
      <div className='bgchange' style={{backgroundColor:Color}}></div>
    </div>
  )
}

export default App
