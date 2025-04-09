import React, {useState} from 'react'

import KeyContext from './KeyContext'

const keyContextProvider = ({ children }) => {
  const [key, setKey] = useState([]);
  return (
    <KeyContext.Provider value={{ key, setKey }}>
      {children}
    </KeyContext.Provider>
  );
};

export default keyContextProvider