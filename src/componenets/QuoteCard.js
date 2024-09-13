// src/components/QuoteCard.js
import React from 'react';
import './QuoteCard.css'; // We'll add styles here

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={() => onSave(quote)} className="save-btn">
        Save to List
      </button>
    </div>
  );
};

export default QuoteCard;
