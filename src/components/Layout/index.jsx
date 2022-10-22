import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function Layout(props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-1'>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}
export default Layout