import { useState } from 'react'

import LoginPage from './pages/loginPage'
import UserDashboard from './pages/UserDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserDashboard />
      
    </>
  )
}

export default App
