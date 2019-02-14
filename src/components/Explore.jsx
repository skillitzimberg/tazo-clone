import React from 'react';
import Category2 from './Category2';


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
          .parent {
            border: 1px solid #333;
            display: flex;
            flex-direction: row;
          }
        `}</style>
      <div className='secondary-header'>
        <h2>EXPLORE</h2>
        <h1>OUR UNEXPECTED BLENDS</h1>
      </div>

      <div className='parent'>
        <Category2 />
        <Category2 />
        <Category2 />
        <Category2 />
      </div>
    </div>
  );
}

export default Explore;
