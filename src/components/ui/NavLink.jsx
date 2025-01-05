import React from 'react'

const NavLink = ({ href, children, mobile }) => (
  <a
    href={href}
    className={`text-gray-300 hover:text-emerald-400 transition-colors ${
      mobile ? 'block text-lg' : ''
    }`}
  >
    {children}
  </a>
)

export default NavLink