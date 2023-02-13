import React from 'react'
import logo from '/img/logo.svg'

const Header = () => {
  return (
    <nav className="navbarr">
      <img src={logo} alt="navlogo" className='pe-2'/>
      my travel journal.
    </nav>
  )
}

export default Header