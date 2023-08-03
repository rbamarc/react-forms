import SignUp from './component/SignUpForm'
import Authenticate from './component/Authenticate'
import './App.css'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <SignUp token={token } setToken={setToken} />
      <Authenticate token={token } setToken={setToken}/>
    </>
  )
}

export default App
