import React from 'react';

import {Button, Icon} from 'react-materialize';

const buttonStyle = {
  marginTop: '250px',
  marginRight: '500px',
  height: '50px',
  paddingLeft: '50px',
  paddingRight: '50px',

};

function Banner(){
  return (
    <div className='test'>
        <style jsx>{`
          .test {
            background-image: url("https://images.unsplash.com/photo-1461595520627-42e3c83019bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
            background-size: cover;
            height: 500px;
            text-align: center;
          }
        `}</style>
      <Button waves='light' className='red' style={buttonStyle}>
        SHOP NOW
      </Button>
    </div>
  );
}

export default Banner;
