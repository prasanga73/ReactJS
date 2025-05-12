import React from 'react'
import { useState,useRef } from 'react';


const App = () => {


  const [user, setUser] = useState("Prasanga");
  const [count, setCount] = useState(1);
  const [userName, setUserName] = useState('');

  const changeUser = () => {
    if (count % 2 === 0) {
      setUser("Prasanga");
    } else {
      setUser("Pragya  ");
    }
    setCount(count + 1);
    console.log(count);
  }
    
  const subHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setUserName('');
  }

  return (
    <div className= "App">
      <div>
        <form onSubmit={(e) => {
          subHandler(e);
        }}> 
          <input value = {userName} onChange={(e)=>{
            console.log(e.target.value);
            setUserName(e.target.value);
          }} className= 'px-4 py-3 text-xl border-2 border-black m-5' type="text" placeholder="Enter your name"/>
          <button className = 'px-4 py-3 rounded text-xl' type="submit">Submit</button>
        </form>
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>


      <h1> Current user is {user} </h1>
      <button onClick={changeUser}> Change user</button>
      
      </div>
  )
}

export default App