import React, { useState, useContext } from 'react';
import './UpdateKey.css';
import axios from 'axios';
import KeyContext from '../Contexts/KeyContext';

function UpdateKey() {
  const [keyValue, setKeyValue] = useState('');
  const [indexValue, setIndexValue] = useState();

  const handleIndexChange = (event) => {
    setIndexValue(event.target.value);
  };
  const handleKeyChange = (event) => {
    setKeyValue(event.target.value);
  };
   const {key, setKey} = useContext(KeyContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically handle the logic for updating the key
    console.log('Updated key:', keyValue);
    await axios.put('https://3000-idx-my-java-app-1742539032645.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/updatekey', {
      index: parseInt(indexValue),
      key: keyValue
    })
    const tempKey = [...key]
    tempKey[indexValue] = keyValue
    setKey(tempKey)
    setIndexValue('')
    // Reset the input field after submission
    setKeyValue('');
  };

  return (
    <div>
      <h3>Update Key</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Index:
          <input
            type="number"
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
