import React, { useEffect, useState } from 'react'

function App() {
  const [greetingmessage,setgreeting]=useState("");
  useEffect(
    ()=>{
      let hours=new Date().getHours().toString().padStart(2,"0")
      let minutes=new Date().getMinutes().toString().padStart(2,"0")
      let seconds=new Date().getSeconds().toString().padStart(2,"0")
      if(hours<12){
        setgreeting(`Good morning ${hours}:${minutes}:${seconds}`)
      }
      else if(hours>=12 && hours<=15)
      {
        setgreeting(`Good afternoon ${hours}:${minutes}:${seconds}`)

      }
      else if(hours>=17 && hours<=18)
      {
        setgreeting(`Good evening ${hours}:${minutes}:${seconds}`)
      }
      else
      {
        setgreeting(`good night`)
      }
    }
  )
  return (
    <div>
      <div style={{
        height:"100px",
        width:"300px",
        backgroundColor:"lightpink",
        marginTop:"40px",
        marginLeft:"300px",
        borderTopLeftRadius:"20px",
        borderBottomRightRadius:"20px",
        textAlign:"center",
        paddingTop:"50"}}>{greetingmessage}
        
    

      </div>
    </div>
  )
}

export default App
