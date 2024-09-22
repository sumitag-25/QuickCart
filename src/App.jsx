import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import Home from './Compnents/Home/Home'
import Admin from './Compnents/Admin/Admin'
import Analytics from './Compnents/Admin/Analytics/Analytics'
import NotFound from './Compnents/Admin/Notfound/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/admin/analytics' element={<Analytics/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    
  )
}

export default App
