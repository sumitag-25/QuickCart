import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import Home from './Compnents/Home/Home'
import Admin from './Compnents/Admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </Router>
    
  )
}

export default App
