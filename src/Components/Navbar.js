import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const location = useLocation()
  const links = [
    {
      name: 'Home',
      path: '/',
      icon: 'FaBars',
    },
    {
      name: 'Recipes',
      path: '/recipes',
      icon: 'FaBars',
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: 'FaBars',
    },
  ]
  function closeSidebar() {
    setShowSidebar(false)
  }
  return (
    <>
      <div className='navbar container'>
        <Link to='/' className='logo'>
          F<span>oo</span>diesHub
        </Link>
        <div className='nav-links'>
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? 'active' : ''}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}
        >
          <FaBars className='iconFaBar' />
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  )
}
