import React from 'react';

const Header = ({ title }) => {
  return (
    <header style={{ background: '#2c3e50', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;