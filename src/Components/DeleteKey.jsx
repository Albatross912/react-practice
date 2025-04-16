import React, {useContext, useState} from 'react';
import './DeleteKey.css';
import axios from 'axios';
import KeyContext from '../Contexts/KeyContext';
import { BACKEND_URL } from '../config'; // Import the backend URL

const DeleteKey = () => {
    const [indexValue, setIndexValue] = useState(0);
    const {key, setKey, emptyMessage, setEmptyMessage} = useContext(KeyContext);
    const handleInputChange = (event) => {
        setIndexValue(event.target.value);
        setEmptyMessage('');
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(indexValue < 0 || indexValue >= key.length){
            setEmptyMessage('Please enter valid index value');
            return
        }
        // console.log('Updated key:', indexValue);
        // Reset the input field after submission
        
        await axios.delete(`${BACKEND_URL}/deletekey`,{ // Use the imported URL
            data: {index: parseInt(indexValue)}
        })
        key.splice(indexValue, 1)
        setIndexValue('');
    };
  return (
    <div>
        <h3>Delete Key</h3>
        <form onSubmit={handleSubmit}>
            Index:
            <input
                type="number"
                value={indexValue}
                onChange={handleInputChange}
            />
            <button type="submit">Delete Key</button>

            <div>
        <ul>
          {
            key.map((value, index) => (

              <li key={index}>
                {value}
              </li>

            ))
          }
        </ul>
      </div>
        </form>
    </div>
  );
};

export default DeleteKey;
