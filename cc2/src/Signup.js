import React from "react";
import './Signup.css';
import { useState } from "react";
import Login from "./Login";
function Signup() {
    const [signIn, setSignIn] = useState(false); 
  const handleSignup = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username && password) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = { username, password };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      e.target.reset();
    //   alert('User created successfully!');
    setSignIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };
  if(signIn){
    return <Login />
  }

  return (
    <div className="signuppage">
      <br />
      <h4>&nbsp;&nbsp;ScheduleFlight.</h4>
   
      <div className="container2">
        <form onSubmit={handleSignup}>
          
          <h1 id="head">&nbsp;&nbsp;Sign up</h1>
          
          <label htmlFor="username" className="labels">&nbsp;&nbsp;&nbsp;&nbsp;Username: &nbsp;</label>
        
          
          <input type="text" id="username" name="username" className="inputtext" />
       
        
          
          <label htmlFor="password" className="labels">&nbsp;&nbsp;&nbsp;&nbsp;Password: &nbsp;</label>
      
          
          <input type="password" id="password" name="password" className="inputtext"/>
          <br />
          
          <input type="submit" value="SIGN UP" className="but2"/>
        </form>
      </div>
    </div>
  );
}

export default Signup;