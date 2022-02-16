import React from 'react';
import Nav from './Navbar';

function Layout({children}) {
  return (
    <div>
    <Nav />
    {children}</div>
  )
}

export default Layout