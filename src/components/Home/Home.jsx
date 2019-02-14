import React from 'react';
import Banner from '../Banner';
import Explore from '../Explore';

const center = {
  width: '1200px',
  margin: 'auto'
}

function Home(){
  return (
    <div>
      <Banner text={'BREW THE UNEXPECTED'} button={'true'}/>
      <div style={center}>
        <Explore />
      </div>
    </div>
  );
}

export default Home;
