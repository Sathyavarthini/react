import React, { useState } from 'react'

function App() {
  const [theme,settheme]=useState("light");
  const toggletheme =()=>{
    settheme(theme === "light" ? "dark" :"light")

  };
  const containerstyle={
    minHeight:"100vh",
    padding:"20px",
    backgroundColor:theme === "light" ? "#222" :"#fff",
    color:theme === "dark" ? "#222": "#fff"

  }

  
  return (
    <div style={containerstyle}>
      <h1>Theme Toggle Example</h1>
      <p>Click the button to switch between Light and Dark Mode</p>
      <button onClick={toggletheme}>Switch to{theme === "light" ? "light" :"dark"} Mode</button>
      <p>Text color also changes according to the Selected theme</p>
    </div>
  )
}

export default App
