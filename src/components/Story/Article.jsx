import React from 'react';
import PropTypes from 'prop-types';

const img = {
  float: 'right',
  margin: '5px'
};

function Article(props){
  return (
    <div>
      <div className='articleText'>
        <img src={props.image} style={img}/>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Article;
