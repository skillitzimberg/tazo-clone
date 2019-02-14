import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-materialize';

const buttonStyle = {
  marginTop: '250px',
  marginRight: '500px',
  height: '50px',
  paddingLeft: '50px',
  paddingRight: '50px',

};

function Banner(props){
  let button;
  if (props.button == 'true') {
    button = <Button waves='light' className='red' style={buttonStyle}>SHOP NOW</Button>;
  }
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
      <h1>{props.text}</h1>
      {button}
    </div>
  );
}

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default Banner;
