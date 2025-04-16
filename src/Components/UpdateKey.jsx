import React, { useState, useContext } from 'react';
import './UpdateKey.css';
import axios from 'axios';
import KeyContext from '../Contexts/KeyContext';
import { BACKEND_URL } from '../config'; // Import the backend URL

function UpdateKey() {
  const [keyValue, setKeyValue] = useState('');
  const [indexValue, setIndexValue] = useState(''); // Initialize as empty string for consistency
  // Get context values including emptyMessage and its setter
  const { key, setKey, emptyMessage, setEmptyMessage } = useContext(KeyContext);

  const handleIndexChange = (event) => {
    setIndexValue(event.target.value);
    setEmptyMessage(''); // Clear message on input change
  };
  const handleKeyChange = (event) => {
    setKeyValue(event.target.value);
    setEmptyMessage(''); // Clear message on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (indexValue === null || indexValue === '' || isNaN(parseInt(indexValue))) {
      setEmptyMessage('Please enter a valid index (must be a number).');
      return;
    }
    if (keyValue === null || keyValue === '') {
      setEmptyMessage('Please enter the key value.');
      return;
    }

    const numericIndex = parseInt(indexValue);
    if (numericIndex < 0 || numericIndex >= key.length) {
        setEmptyMessage('Index is out of bounds.');
        return;
    }

    try {
      await axios.put(`${BACKEND_URL}/updatekey`, { // Use the imported URL
        index: numericIndex,
        key: keyValue
      });
      const tempKey = [...key];
      tempKey[numericIndex] = keyValue;
      setKey(tempKey);
      setIndexValue(''); // Reset index input field
      setKeyValue(''); // Reset key input field
      setEmptyMessage(''); // Clear message on success
      console.log('Updated key:', keyValue, 'at index:', numericIndex);
    } catch (e) {
        console.error("Error updating key:", e);
        // Set error message using context setter
        setEmptyMessage('Error updating key. Please check the index and try again.');
    }
  };

  return (
    <div>
      {/* Display the message from context */}
      <h3>Update Key</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Index:
          <input
            type="number" // Keep as number for better UX, validation handles non-numbers
            value={indexValue}
            onChange={handleIndexChange}
          />
        </label>
        <label>
          Key:
          <input
            type="text"
            value={keyValue}
            onChange={handleKeyChange}
          />
        </label>
        <button type="submit">Update Key</button>
      </form>
    </div>
  );
}

export default UpdateKey;
