import React from 'react';
import Banner from '../Banner';
import Explore from '../Explore';

function Home(){
  return (
    <div>
    this is Home
      <Banner text={'BREW THE UNEXPECTED'} button={'true'}/>
      <Explore />
    </div>
  );
}

export default Home;
