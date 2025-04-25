import React from 'react'
import { useState,useRef } from 'react';

let count = 1;

const App = () => {


  const [user, setUser] = useState("Prasanga");

  const changeUser = () => {
    if (count % 2 === 0) {
      setUser("Prasanga");
    } else {
      setUser("Pragya");
    }
    count++;
    console.log(count);
  }
    
  return (
    <div className= "App">

      <h1> Current user is {user} </h1>
      <button onClick={changeUser}> Change user</button>
      
      </div>
  )
}

export default App