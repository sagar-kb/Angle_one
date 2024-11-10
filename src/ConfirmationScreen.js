import React from 'react';
import './ConfirmationScreen.css';
import { FaWallet, FaTrophy, FaGift, FaBookOpen } from 'react-icons/fa';

const ConfirmationScreen = () => {
  return (
    <div className="container">
      {/* Success Animation */}
      <div className="success-animation">
        <svg viewBox="0 0 100 100" className="checkmark">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
          <path
            d="M30 50L45 65L70 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      <div className="header-text">
        <h1>Welcome to Angel One!</h1>
        <p>Your account is being verified</p>
      </div>

      {/* Estimated Time Card */}
      <div className="card">
        <div>
          <p className="text-sm">Estimated verification time</p>
          <h3>Within 3 working days</h3>
        </div>
        <FaBookOpen className="card-icon" />
      </div>

      {/* What's Next Section */}
      <h2>While you wait, explore these features:</h2>
      <div className="card">
        <FaWallet className="card-icon" />
        <div>
          <h3>Add Funds</h3>
          <p>Get ready to start investing</p>
        </div>
      </div>

      <div className="card">
        <FaTrophy className="card-icon" />
        <div>
          <h3>Practice Trading</h3>
          <p>Try our market simulator</p>
        </div>
      </div>

      <div className="card">
        <FaGift className="card-icon" />
        <div>
          <h3>Refer & Earn</h3>
          <p>Get ₹500 for each referral</p>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="feedback">
        <p>How was your onboarding experience?</p>
        <div className="feedback-buttons">
          {[...Array(11)].map((_, i) => (
            <button
              key={i}
              className={`feedback-button ${
                i <= 3 ? 'low' : i <= 6 ? 'medium' : 'high'
              }`}
              onClick={() => alert(`You rated your experience as ${i}`)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <button className="explore-button" onClick={() => alert('Welcome to the app! Enjoy exploring.')}>
        Explore App
      </button>
    </div>
  );
};

export default ConfirmationScreen;
