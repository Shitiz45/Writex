import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'



const Headers = () => {
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <img src="../assets/thumbnail-logo" alt="logo" />
        <span>Writex</span>
      </Link>
    </Navbar>
  )
}

export default Headers
