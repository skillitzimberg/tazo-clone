import React from 'react';
import { Link } from 'react-router-dom';

const mainStyle = {
  backgroundColor: '#ff4f00',
  width: '100%',
  height: '65px',
};

function Main(){
  return (
    <div style={mainStyle}>
      <Link to="/">Tazo</Link>
      <Link to="/our-story">Our Story</Link>
      this is main
    </div>
  );
}

export default Main;
