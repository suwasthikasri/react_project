import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Signup from './Signup';
import BookingPage from './BookingPage.js';
import HomePage from './HomePage.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
   <App/>
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();