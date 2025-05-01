import { useState } from 'react'

import LoginPage from './pages/loginPage'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminDashboard />
      
    </>
  )
}

export default App
