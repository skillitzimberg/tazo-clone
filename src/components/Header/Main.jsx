import React from 'react';
import { Link } from 'react-router-dom';

const mainStyle = {
  backgroundColor: '#ff4f00',
  width: '100%',
  height: '65px',
};

const linkStyle = {
  color: '#fff',
  fontSize: '14px',
  lineHeight: '1.1',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textDecoration: 'none',
  fontFamily: 'proxima-nova,verdana,Arial,sans-serif',
  fontWeight: '500',
  margin: '10',
};

function Main(){
  return (
    <div style={mainStyle}>
      <Link to="/" style={linkStyle}>Tazo</Link>
      <Link to="/our-story" style={linkStyle}>Our Story</Link>
    </div>
  );
}

export default Main;
