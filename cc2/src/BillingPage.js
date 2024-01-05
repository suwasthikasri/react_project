
import React, { useState } from 'react';

const BillingPage = ({ location }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('4000'); // Default amount is ₹4000
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          upiId,
          amount,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setPaymentSuccess(true);
      } else {
        console.error('Payment failed:', result); // Log the details of the failed payment
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  
  return (
    <div>
      <h2>Billing Details</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label>UPI ID:</label>
          <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="text" value={`₹${amount}`} readOnly />
        </div>
        <button type="button" onClick={handlePayment}>
          Pay
        </button>
      </form>
      {paymentSuccess && <p>Payment successful! Thank you for booking.</p>}
    </div>
  );
};

export default BillingPage;
