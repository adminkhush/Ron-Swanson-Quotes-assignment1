// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './componenets/QuoteCard';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Fetch random quote
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch on initial load
  }, []);

  // Save quote to list
  const saveToList = (quote) => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      {quote && <QuoteCard quote={quote} onSave={saveToList} />}
      <button onClick={fetchQuote} className="fetch-btn">Get Another Quote</button>

      <h2>Saved Quotes</h2>
      <ul className="saved-quotes">
        {savedQuotes.map((savedQuote, index) => (
          <li key={index}>{savedQuote}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
