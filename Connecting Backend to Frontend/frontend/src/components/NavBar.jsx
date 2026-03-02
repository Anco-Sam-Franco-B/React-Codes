import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-full flex items-center justify-around p-2'>
      <h1 className='text-2xl font-bold text-blue-500'>UMS</h1>
      <nav className='flex items-center gap-3'>
        <Link className='bg-gray-300 hover:bg-blue-500 p-2 hover:text-white font-medium rounded-md' to='/'>Create User</Link>
        <Link className='bg-gray-300 hover:bg-blue-500 p-2 hover:text-white font-medium rounded-md' to='/users'>View Users</Link>
      </nav>
    </div>
  )
}

export default NavBar
