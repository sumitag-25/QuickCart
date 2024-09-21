import React from 'react'

function Layout(data) {
  return (
    <div>
        <h1>Header</h1>
        {data.children}
        <h1>Footer</h1>
    </div>
  )
}

export default Layout