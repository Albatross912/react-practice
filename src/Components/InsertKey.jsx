import './InsertKey.css';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import KeyContext from '../Contexts/KeyContext';
import { BACKEND_URL } from '../config';

function InsertKey () {
  // Get emptyMessage and setEmptyMessage from context
  const { key, setKey, emptyMessage, setEmptyMessage } = useContext(KeyContext);
  const [keyValue, setKeyValue] = useState('');

  const handleInputChange = (event) => {
    setKeyValue(event.target.value);
    // Use context setter
    setEmptyMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(keyValue == null || keyValue === "") {
      // Use context setter
      setEmptyMessage('Please enter some input');
      return;
    }
    console.log(key);
    try {
      await axios.post(`${BACKEND_URL}/insertkey`, { keyValue });
      setKey((p) => [...p, keyValue]);
      setKeyValue('');
      // Clear message on success
      setEmptyMessage('');
    }
    catch (e) {
      console.error("Error inserting key:", e);
      setEmptyMessage('Error inserting key. Please try again.'); // Set error message via context
    }
  };

  return (
    <div>
      {/* Use context state: emptyMessage */}
      {emptyMessage && <p style={{ color: 'red' }}>{emptyMessage}</p>} {/* Optional styling for error */}
      <h3>Insert Key</h3>
      <form onSubmit={handleSubmit}>
        key:
        <input
          type="text"
          value={keyValue}
          onChange={handleInputChange}
        ></input>
        <button type='submit'>
          Create Key
        </button>
      </form>
    </div>
  );
};

export default InsertKey;
