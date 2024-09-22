import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='text-5xl font-semibold text-blue-500'>
            Welcome to homepage
        </div>
        <Link to="/admin">
            <Button>Go to admin panel</Button>
        </Link>
    </div>
  )
}

export default Home