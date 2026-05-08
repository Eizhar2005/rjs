import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-blue-900'>
      <h2 className='text-white text-xl font-bold'>Router</h2>
      <div className='flex gap-8'>
        <Link to="/" className='text-white'>
          Home
        </Link>
        <Link to="/about" className='text-white'>
          About
        </Link>
        <Link to="/contact" className='text-white'>
          Contact
        </Link>
        <Link to="/courses" className='text-white'>
          Courses 
        </Link>
      </div>
    </div>              
  )
}

export default Navbar
