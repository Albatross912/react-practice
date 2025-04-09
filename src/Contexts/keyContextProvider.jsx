import React, {useState} from 'react'

import keyContext from './keyValue'

const keyContextProvider = ({children}) => {
    const [key, setKey] = useState();
    return(
        <keyContext.Provider value={{key, setKey}}>
            {children}
        </keyContext.Provider>
    )
}

export default keyContextProvider