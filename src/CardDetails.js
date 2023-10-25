import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardDetails = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber && expirationDate && cvv) {
      navigate('/ordersuccess');
    } else {
      setError('Please fill in all required details.');
    }
  };

  return (
    <div className="payment-mode-selection">
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center vertically */
            min-height: 100vh; /* Set minimum height to 100% of the viewport height */
          }

          .payment-mode-selection {
            max-width: 400px;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }

          h2 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
          }

          .payment-mode-option {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }

          input[type="radio"] {
            margin-right: 10px;
            transform: scale(1.5); /* Increase the radio button size */
          }

          label {
            font-size: 18px;
            color: #333;
            cursor: pointer;
          }

          button {
            background: #f0c14b;
            border-radius: 2px;
            width: 100%;
            height: 30px;
            border: 1px solid;
            margin-top: 10px;
            border-color: #a88734 #9c7e31 #846a29;
            color: #111;
          }

          button:hover {
            background-color: #d4ac0d;
          }
          .agreement-text {
            font-size: 14px;
            color: #888;
            margin-top: 10px;
            text-align: center;
            .error-message {
            color: red;
            margin-top: 10px;
          }
          .error-message {
            color: red;
            margin-top: 10px;
          }
        `}
      </style>
      <h2 style={{ marginLeft: '60px' }}>Enter Your Card Details</h2>
      <div className="payment-mode-selection">
        <div className="payment-mode-option">
          <label htmlFor="cardNumber" style={{ fontSize: '18px', marginRight: '27px' }}>
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="payment-mode-option">
          <label htmlFor="expirationDate" style={{ fontSize: '18px', marginRight: '13px' }}>
            Expiration Date
          </label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>

        <div className="payment-mode-option">
          <label htmlFor="cvv" style={{ fontSize: '18px', marginRight: '100px' }}>
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {error && <p style={{ color: 'red', paddingLeft: '90px' }}>{error}</p>}

      <p className="agreement-text">
        By proceeding, you agree to our Terms and Conditions, Privacy Policy, and Cookie Policy.
      </p>
    </div>
  );
};

export default CardDetails;
