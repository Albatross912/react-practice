import './InsertKey.css';
import axios from 'axios'
import React, { useState } from 'react';

const InsertKey = () => {
  const [keyValue, setKeyValue] = useState('');
  const handleInputChange = (event) => {
    setKeyValue(event.target.value);
  };
  const [data, setData] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically handle the logic for updating the key
    console.log('Updated key:', keyValue);
    try {
      await axios.post('https://3000-idx-my-java-app-1742539032645.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/insertkey', { keyValue })
      // Reset the input field after submission
      setData((p) => [...p, keyValue])
      setKeyValue('');

    }
    catch (e) {

    }


  };


  return (
    <div>
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
      <div>
        <ul>
          {
            data.map((value, index) => (

              <li key={index}>
                {value}
              </li>

            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default InsertKey;
