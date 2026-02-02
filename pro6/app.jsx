import React, { useState } from 'react'

function App() {
  const [num1,setNum1]=useState=("");
  const [num2,setNum2]=useState=("");
  const a=Number(num1);
  const b=Number(num2);


  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" placeholder="value 1" onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number" placeholder="value 2"onChange={(e)=>setNum2(e.target.value)}/>
      
      <div style={{height:"200px",width:"200px",border:"1px solid",marginLeft:"550px",marginTop:"30px",textAlign:"left"}}>
        <p><strong>Addition :</strong></p>
        <p><strong>subraction :</strong></p>
        <p><strong>multiplication :</strong></p>
        <p><strong>division :</strong>
        {b==0 ? "cannot divide by zero":a/b}</p>
      </div>
    </div>
  )
}

export default App
