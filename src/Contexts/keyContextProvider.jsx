import React, { useState } from 'react';
import KeyContext from './KeyContext';

const KeyContextProvider = ({ children }) => {
  const [key, setKey] = useState([]);
  const [emptyMessage, setEmptyMessage] = useState(''); // Added emptyMessage state

  return (
    <KeyContext.Provider value={{ key, setKey, emptyMessage, setEmptyMessage }}> {/* Included in provider value */}
      {children}
    </KeyContext.Provider>
  );
};

export default KeyContextProvider;