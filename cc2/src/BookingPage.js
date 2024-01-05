// BookingPage.js
import './BookingPage.css';
import React, { useState } from 'react';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const handleBooking = async() => {
    try {
        // Simulate API call to perform booking using JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phoneNumber,
            email,
            passengerCount,
          }),
        });
  
        // Simulate a successful booking
        if (response.ok) {
          setBookingSuccess(true);
        } else {
          // Simulate a failed booking
          alert('Booking failed. Please try again.');
        }
      } catch (error) {
        console.error('Error processing booking:', error);
        alert('An error occurred. Please try again later.');
      }
    };

  return (
    <div className="container">
      <h2>Booking Details</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Passenger Count:</label>
          <input
            type="number"
            min="1"
            value={passengerCount}
            onChange={(e) => setPassengerCount(parseInt(e.target.value))}
          />
        </div>
        <button type="button" onClick={handleBooking}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
