
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav style={{ backgroundColor: 'lightgray', padding: '10px', textAlign: 'center' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          <li style={{ margin: '0 10px' }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;
