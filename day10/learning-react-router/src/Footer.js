import React from 'react';

function Footer() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      border: '1px solid black'
    }}>
      <a href="#">Contact us</a>
      <a href="#">Terms & Condition</a>
    </div>
  );
}

export default Footer;