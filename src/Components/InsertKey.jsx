import './InsertKey.css';
import axios from 'axios'
import React, { useState, useContext } from 'react';
import keyContextProvider from '../Contexts/keyContextProvider';
import KeyContext from '../Contexts/KeyContext';
function InsertKey ()  {
  const {key, setKey} = useContext(KeyContext);
  const [keyValue, setKeyValue] = useState('');
  const handleInputChange = (event) => {
    setKeyValue(event.target.value);
  };
  const [data, setData] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(key);
    try {
      await axios.post('https://3000-idx-my-java-app-1742539032645.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/insertkey', { keyValue })
      setKey((p) => [...p, keyValue])
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
    </div>
  );
};

export default InsertKey;
