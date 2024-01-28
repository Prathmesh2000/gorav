import React from 'react';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={leftContainerStyle}>
        {/* Your icon goes here */}
        <span role="img" aria-label="icon">🌟</span>
      </div>
      <div style={rightContainerStyle}>
        <a href="#about-us" style={linkStyle}>About Us</a>
        <a href="#contact-us" style={linkStyle}>Contact Us</a>
      </div>
    </nav>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '30px',
  backgroundColor: '#333',
  color: '#fff',
};

const leftContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const rightContainerStyle = {
  display: 'flex',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  marginLeft: '20px',
};

export default Navbar;
