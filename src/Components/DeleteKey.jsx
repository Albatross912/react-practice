import React, {useContext, useState} from 'react';
import './DeleteKey.css';
import axios from 'axios';
import KeyContext from '../Contexts/KeyContext';
const DeleteKey = () => {
    const [indexValue, setIndexValue] = useState(0);
    const {key} = useContext(KeyContext);
    const handleInputChange = (event) => {
        setIndexValue(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Here you would typically handle the logic for updating the key
        console.log('Updated key:', indexValue);
        // Reset the input field after submission
        
        await axios.delete('https://3000-idx-my-java-app-1742539032645.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/deletekey',{
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
