import React from 'react';
import Category from './Category';

function Explore(){
  return (
    <div className='test'>
        <style jsx>{`
          .test {
            height: 500px;
          }

          .secondary-header {
              text-align: center;
          }
        `}</style>
        <div className='secondary-header'>
          <h2>EXPLORE</h2>
          <h1>OUR UNEXPECTED BLENDS</h1>
        </div>
        <Category />
        <Category />
        <Category />
        <Category />
    </div>
  );
}

export default Explore;
