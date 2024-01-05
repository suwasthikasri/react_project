// HomePage.js
import './style.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './Navbar';
import Footer from './Footer';
const HomePage = () => {
  const [startPoint, setStartPoint] = useState('New Delhi');
  const [destination, setDestination] = useState('Paris');
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSearchFlights = () => {
    if (startPoint === destination) {
      setErrorMessage('Please select a valid destination.');
    } else {
      // Perform flight search logic or redirect to a search results page
      setErrorMessage('');
    }
  };

  const handleFlightSelection = (flightNumber) => {
    // Redirect to billing page with flight details
    navigate(`/billing?flight=${flightNumber}`);
  };

  return (
    <div>
      <Navbar/>
      <h2>Flight Booking</h2>
      <form>
      <div>
          <label>Starting Point:</label>
          <select value={startPoint} onChange={(e) => setStartPoint(e.target.value)}>
            <option value="New Delhi">New Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
          </select>
        </div>
        <div>
          <label>Destination:</label>
          <select value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
          </select>
        </div>
        <div>
          <label>Arrival Date and Time:</label>
          <DatePicker
            selected={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div>
          <label>Departure Date and Time:</label>
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <button type="button" onClick={handleSearchFlights}>
          Search Flights
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      <div>
        <h3>Choose your Flight:</h3>
        <ul>
          <li>
            Flight 1 - Schedule: 10:00 AM - Cost: ₹14000{' '}
            <Link to = "/billing">
            <button onClick={() => handleFlightSelection(1)}>Select Flight</button>
            </Link>
          </li>
          <li>
            Flight 2 - Schedule: 12:00 PM - Cost: ₹34500{' '}
            <Link to = "/billing">
            <button onClick={() => handleFlightSelection(2)}>Select Flight</button>
            </Link>
          </li>
          <li>
            Flight 3 - Schedule: 2:00 PM - Cost: ₹15000{' '}
            <Link to = "/billing">
            <button onClick={() => handleFlightSelection(3)}>Select Flight</button>
            </Link>
          </li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
