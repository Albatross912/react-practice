import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InsertKey from './Components/InsertKey'
import UpdateKey from './Components/UpdateKey'
import DeleteKey from './Components/DeleteKey'
import KeyContextProvider from './Contexts/keyContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <KeyContextProvider>
      <InsertKey />
      <UpdateKey />
      <DeleteKey />
    </KeyContextProvider>
  )
}

export default App
