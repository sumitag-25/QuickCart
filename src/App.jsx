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
import Inventry from './Compnents/Admin/Inventry/Inventry'
import Branding from './Compnents/Admin/Branding/Branding'
import Category from './Compnents/Admin/Category/Category'
import Brand from './Compnents/Admin/Brand/Brand'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/admin/analytics' element={<Analytics/>} />
          <Route path='/admin/inventry' element={<Inventry/>} />
          <Route path='/admin/branding' element={<Branding/>} />
          <Route path='/admin/category' element={<Category/>} />
          <Route path='/admin/brand' element={<Brand/>} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
      </Router>
    
  )
}

export default App
