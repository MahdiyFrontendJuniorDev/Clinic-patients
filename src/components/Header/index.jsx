import React from 'react'

function Header() {
  return (
    <header>
      <div className=' flex items-center justify-between p-10'>
        <div className='company-logo'>
          <img className='hover:cursor-pointer' src="https://www.doctor.com/images/logo-dark.png" alt="" />
        </div>
        <ul className='flex space-x-10'>
          <li className='hover:cursor-pointer hover:underline'>PRIVITE PRACTICE</li>
          <li className='hover:cursor-pointer hover:underline'>ENTERPRICE</li>
          <li className='hover:cursor-pointer hover:underline'>ABOUT</li>
        </ul>
        <div className='flex items-center space-x-10'>
          <h1 className='hover:cursor-pointer hover:underline'>SIGN IN</h1>
          <button className='text-red-500 border border-red-500 px-5 py-3 hover:text-white hover:bg-red-500'>BOOK A DEMO</button>
        </div>
      </div>
    </header>
  )
}

export default Header