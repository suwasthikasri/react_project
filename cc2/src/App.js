
import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Login from './Login';
import Signup from './Signup';
import BookingPage from './BookingPage';
import BillingPage from './BillingPage';
import Navbar from './Navbar.jsx';
// import ResponsiveAppBar from './ResponsiveAppBar.jsx';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
        <Routes>
          <Route exact path = "/" element={<HomePage/>}></Route>
          <Route path = "/booking" element={<BookingPage/>}></Route>
          <Route path = "/billing" element={<BillingPage/>}></Route>
          <Route path = "/signup" element={<Signup/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>
        </Routes>
      {/* <BillingPage/> */}
    </div>
  );
}

export default App;