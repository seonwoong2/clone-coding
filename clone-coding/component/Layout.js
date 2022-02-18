import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
