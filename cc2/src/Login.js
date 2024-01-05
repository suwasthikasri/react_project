import React from "react";
import './Login.css';
import  HomePage from './HomePage.jsx';
import { useState } from "react";


function Login() {
    const [loggedIn, setLoggedIn] = useState(false);   
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username && password) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const foundUser = storedUsers.find(user => user.username === username && user.password === password);
      if (foundUser) {
        // alert('Login successful!');
        setLoggedIn(true);
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Please enter both username and password');
    }
  };
  if(loggedIn) {
    return <HomePage />;
  }

  return (
    <div className="loginpage">
      <br/>
      <h4 >&nbsp;&nbsp;ScheduleFlight.</h4>
      
      <div className="container2">
        <form onSubmit={handleLogin}>
          
          <h1 id="head">&nbsp;&nbsp;Log in</h1>
          
          <label htmlFor="username" className="labels">&nbsp;&nbsp;&nbsp;&nbsp;Username: &nbsp;</label>
          
          <input type="text" id="username" name="username" class="inputtext" />
          
          <label htmlFor="password" className="labels">&nbsp;&nbsp;&nbsp;&nbsp;Password: &nbsp;</label>
          
          
          <input type="password" id="password" name="password" class="inputtext" />
          
          <br/>
         <input type="submit" value="LOGIN" className="but" />
        </form>
      </div>
    </div>
  );
}

export default Login;